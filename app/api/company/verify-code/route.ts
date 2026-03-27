import { NextRequest, NextResponse } from "next/server";
import { createHmac, timingSafeEqual } from "crypto";

function generateCode(email: string): string {
  const secret = process.env.COMPANY_CARD_SECRET ?? "rdn-default-secret";
  const hour = Math.floor(Date.now() / 3_600_000);
  const hmac = createHmac("sha256", secret)
    .update(`${email.toLowerCase()}:${hour}`)
    .digest("hex");
  return hmac.replace(/[^0-9]/g, "").slice(0, 6).padEnd(6, "0");
}

function generateCodePrevHour(email: string): string {
  // Also check previous hour so codes don't expire mid-use
  const secret = process.env.COMPANY_CARD_SECRET ?? "rdn-default-secret";
  const hour = Math.floor(Date.now() / 3_600_000) - 1;
  const hmac = createHmac("sha256", secret)
    .update(`${email.toLowerCase()}:${hour}`)
    .digest("hex");
  return hmac.replace(/[^0-9]/g, "").slice(0, 6).padEnd(6, "0");
}

export async function POST(req: NextRequest) {
  try {
    const { email, code } = await req.json();

    if (!email || !code) {
      return NextResponse.json({ valid: false }, { status: 400 });
    }

    const normalized = email.trim().toLowerCase();
    const inputCode = code.trim();

    const expectedCode = generateCode(normalized);
    const prevCode = generateCodePrevHour(normalized);

    // Timing-safe comparison to prevent timing attacks
    const buf1 = Buffer.from(inputCode.padEnd(6, "x"));
    const buf2 = Buffer.from(expectedCode);
    const buf3 = Buffer.from(prevCode);

    const isValid =
      buf1.length === buf2.length && timingSafeEqual(buf1, buf2) ||
      buf1.length === buf3.length && timingSafeEqual(buf1, buf3);

    return NextResponse.json({ valid: isValid });
  } catch (err) {
    console.error("verify-code error:", err);
    return NextResponse.json({ valid: false }, { status: 500 });
  }
}
