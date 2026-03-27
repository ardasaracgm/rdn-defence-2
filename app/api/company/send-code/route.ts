import { NextRequest, NextResponse } from "next/server";
import { createHmac } from "crypto";

// Free email providers to block
const FREE_PROVIDERS = new Set([
  "gmail.com", "googlemail.com", "hotmail.com", "hotmail.co.uk",
  "outlook.com", "live.com", "live.co.uk", "yahoo.com", "yahoo.co.uk",
  "ymail.com", "icloud.com", "me.com", "mac.com", "aol.com",
  "protonmail.com", "proton.me", "tutanota.com", "tutanota.de",
  "tutamail.com", "yandex.com", "yandex.ru", "mail.ru",
  "gmx.com", "gmx.net", "web.de", "msn.com", "inbox.com",
]);

function isCorporateEmail(email: string): boolean {
  const domain = email.split("@")[1]?.toLowerCase();
  if (!domain) return false;
  return !FREE_PROVIDERS.has(domain);
}

function generateCode(email: string): string {
  const secret = process.env.COMPANY_CARD_SECRET ?? "rdn-default-secret";
  const hour = Math.floor(Date.now() / 3_600_000); // changes every hour
  const hmac = createHmac("sha256", secret)
    .update(`${email.toLowerCase()}:${hour}`)
    .digest("hex");
  // Take first 6 digits from hex
  const digits = hmac.replace(/[^0-9]/g, "").slice(0, 6).padEnd(6, "0");
  return digits;
}

export async function POST(req: NextRequest) {
  try {
    const { email } = await req.json();

    if (!email || typeof email !== "string") {
      return NextResponse.json({ error: "invalid_email" }, { status: 400 });
    }

    const normalized = email.trim().toLowerCase();

    if (!isCorporateEmail(normalized)) {
      return NextResponse.json({ error: "free_email" }, { status: 400 });
    }

    const code = generateCode(normalized);

    // Send email via Resend
    const resendKey = process.env.RESEND_API_KEY;
    if (!resendKey) {
      return NextResponse.json({ error: "server_config" }, { status: 500 });
    }

    const emailRes = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${resendKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "RDN Technology <noreply@rdnsoft.com>",
        to: normalized,
        subject: "RDN Technology — Access Code",
        html: `
          <div style="font-family:Arial,sans-serif;max-width:480px;margin:0 auto;background:#09090e;color:#fff;border-radius:16px;overflow:hidden;">
            <div style="background:#cc1111;padding:24px 32px;">
              <h1 style="margin:0;font-size:20px;font-weight:700;letter-spacing:1px;">RDN TECHNOLOGY</h1>
              <p style="margin:4px 0 0;font-size:13px;opacity:0.8;">Corporate Information Access</p>
            </div>
            <div style="padding:32px;">
              <p style="color:#a1a1aa;font-size:14px;margin:0 0 24px;">Your verification code for accessing corporate information:</p>
              <div style="background:#1a1a1a;border:1px solid #333;border-radius:12px;padding:24px;text-align:center;margin-bottom:24px;">
                <span style="font-size:40px;font-weight:700;letter-spacing:12px;color:#fff;font-family:monospace;">${code}</span>
              </div>
              <p style="color:#71717a;font-size:13px;margin:0;">This code is valid for <strong style="color:#fff;">1 hour</strong>. Do not share it with others.</p>
            </div>
            <div style="padding:16px 32px;border-top:1px solid #222;text-align:center;">
              <p style="color:#52525b;font-size:12px;margin:0;">rdnsoft.com · Ankara, Turkey</p>
            </div>
          </div>
        `,
      }),
    });

    if (!emailRes.ok) {
      const err = await emailRes.text();
      console.error("Resend error:", err);
      return NextResponse.json({ error: "send_failed" }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("send-code error:", err);
    return NextResponse.json({ error: "server_error" }, { status: 500 });
  }
}
