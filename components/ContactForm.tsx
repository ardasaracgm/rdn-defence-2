"use client";

import { useState, type FormEvent } from "react";

const EMAIL = "info@rdnsoft.com";

// Temporary solution until a server-side email route is added:
// the form composes a pre-filled email in the visitor's mail app and
// always shows the address as a fallback, so no inquiry is silently lost.
export default function ContactForm() {
  const [sent, setSent] = useState(false);
  const [copied, setCopied] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const get = (k: string) => String(data.get(k) ?? "").trim();

    const service = get("service") || "General inquiry";
    const subject = `Project inquiry: ${service}`;
    const body = [
      `Name: ${get("name")}`,
      `Company: ${get("company") || "-"}`,
      `Email: ${get("email")}`,
      `Phone: ${get("phone") || "-"}`,
      `Service: ${service}`,
      "",
      get("message"),
    ].join("\n");

    window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
    } catch {
      setCopied(false);
    }
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="form-row">
        <label>
          <span>Name</span>
          <input type="text" name="name" placeholder="Your name" required />
        </label>
        <label>
          <span>Company</span>
          <input type="text" name="company" placeholder="Company name" />
        </label>
      </div>

      <div className="form-row">
        <label>
          <span>Email</span>
          <input type="email" name="email" placeholder="name@company.com" required />
        </label>
        <label>
          <span>Phone</span>
          <input type="tel" name="phone" placeholder="+90 ..." />
        </label>
      </div>

      <label>
        <span>Service</span>
        <select name="service" defaultValue="">
          <option value="" disabled>Select a service</option>
          <option>Software Development</option>
          <option>AI & Computer Vision</option>
          <option>Data & Signal Technologies</option>
          <option>System Integration</option>
          <option>Technology Consulting</option>
          <option>Other</option>
        </select>
      </label>

      <label>
        <span>Project Details</span>
        <textarea
          name="message"
          placeholder="Tell us what you are trying to build, improve or integrate..."
          rows={7}
          required
        />
      </label>

      <button className="button primary submit-button" type="submit">
        Send Project Inquiry
      </button>

      {sent && (
        <p className="form-note" role="status">
          Your email app should open with the message ready to send. If it did
          not, please write to us directly at{" "}
          <a href={`mailto:${EMAIL}`}>{EMAIL}</a>{" "}
          <button type="button" className="copy-link" onClick={copyEmail}>
            {copied ? "Copied" : "Copy address"}
          </button>
        </p>
      )}
    </form>
  );
}
