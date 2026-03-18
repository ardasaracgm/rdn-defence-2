"use client";

import { useState } from "react";

export default function StickyLeadBar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* BAR */}
      <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-slate-200 bg-white/95 backdrop-blur">
        <div className="container-main flex items-center justify-between py-3">
          <div className="text-sm font-medium text-slate-700">
            Need pricing or technical details?
          </div>

          <div className="flex gap-3">
            <button
              onClick={() => setOpen(true)}
              className="rounded-xl bg-slate-950 px-4 py-2 text-sm font-semibold text-white"
            >
              Request Quote
            </button>

            <a
              href="https://wa.me/905XXXXXXXXX"
              target="_blank"
              className="rounded-xl border border-slate-300 px-4 py-2 text-sm font-semibold"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* MODAL */}
      {open && (
        <div className="fixed inset-0 z-[60] bg-black/50 flex items-center justify-center p-4">
          <div className="w-full max-w-md rounded-2xl bg-white p-6">
            <h3 className="text-xl font-bold">Request Quote</h3>

            <form className="mt-4 space-y-3">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full border p-3 rounded-xl"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full border p-3 rounded-xl"
              />
              <input
                type="text"
                placeholder="Country"
                className="w-full border p-3 rounded-xl"
              />

              <button className="w-full bg-slate-950 text-white py-3 rounded-xl">
                Submit Request
              </button>
            </form>

            <button
              onClick={() => setOpen(false)}
              className="mt-3 text-sm text-slate-500"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}
