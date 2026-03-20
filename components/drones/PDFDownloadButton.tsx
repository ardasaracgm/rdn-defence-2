"use client";

import { useState } from "react";
import type { Product } from "@/data/products";

type Props = { product: Product };

export default function PDFDownloadButton({ product }: Props) {
  const [loading, setLoading] = useState(false);

  const handleDownload = async () => {
    setLoading(true);
    const { jsPDF } = await import("jspdf");
    const doc = new jsPDF({ unit: "mm", format: "a4", orientation: "portrait" });
    const W = 210, H = 297, m = 18;

    type RGB = [number, number, number];
    const c: Record<string, RGB> = {
      navy:   [13,  31,  60],
      navyM:  [21,  40,  71],
      navyL:  [16,  36,  66],
      blue:   [43, 127, 212],
      accent: [41, 212, 255],
      white:  [238, 243, 255],
      dim:    [140, 165, 200],
      border: [43,  80, 130],
    };

    const fill  = (k: RGB) => doc.setFillColor(...k);
    const txt   = (k: RGB) => doc.setTextColor(...k);
    const draw  = (k: RGB) => doc.setDrawColor(...k);

    /* background */
    fill(c.navy); doc.rect(0, 0, W, H, "F");

    /* header */
    fill(c.navyM); doc.rect(0, 0, W, 38, "F");
    draw(c.accent); doc.setLineWidth(0.4); doc.line(0, 38, W, 38);
    txt(c.white);  doc.setFont("helvetica", "bold"); doc.setFontSize(18);
    doc.text("RDN", m, 22);
    txt(c.accent); doc.text(" TECHNOLOGY", m + 16, 22);

    fill(c.navyM); doc.roundedRect(W - m - 52, 11, 52, 14, 1, 1, "F");
    draw(c.border); doc.setLineWidth(0.3); doc.roundedRect(W - m - 52, 11, 52, 14, 1, 1, "S");
    txt(c.accent); doc.setFont("helvetica", "normal"); doc.setFontSize(7);
    doc.text("TECHNICAL DATASHEET", W - m - 26, 19.5, { align: "center" });

    txt(c.dim); doc.setFontSize(7);
    doc.text(
      new Date().toLocaleDateString("en-GB", { year: "numeric", month: "long", day: "numeric" }),
      W - m, 29, { align: "right" }
    );

    /* product name block */
    let y = 54;
    txt(c.accent); doc.setFont("helvetica", "normal"); doc.setFontSize(8);
    doc.setCharSpace(3);
    doc.text((product.productType ?? product.category).toUpperCase(), m, y);
    doc.setCharSpace(0);
    y += 9;
    txt(c.white); doc.setFont("helvetica", "bold"); doc.setFontSize(36);
    doc.text(product.name, m, y);
    y += 4;
    draw(c.accent); doc.setLineWidth(0.5); doc.line(m, y, m + 60, y);
    y += 8;
    txt(c.dim); doc.setFont("helvetica", "normal"); doc.setFontSize(9);
    const descLines = doc.splitTextToSize(product.description, W - m * 2);
    doc.text(descLines.slice(0, 2), m, y);

    /* quick stats bar */
    y += 20;
    const stats = product.droneQuickStats ?? [];
    if (stats.length) {
      fill(c.navyM); doc.rect(m - 2, y, W - m * 2 + 4, 26, "F");
      draw(c.border); doc.setLineWidth(0.3); doc.rect(m - 2, y, W - m * 2 + 4, 26, "S");
      const cellW = (W - m * 2) / stats.length;
      stats.forEach((s, i) => {
        const cx = m + cellW * i + cellW / 2;
        txt(c.accent); doc.setFont("helvetica", "normal"); doc.setFontSize(6);
        doc.text(s.label.toUpperCase(), cx, y + 8, { align: "center" });
        txt(c.white); doc.setFont("helvetica", "bold"); doc.setFontSize(11);
        doc.text(`${s.value} ${s.unit}`, cx, y + 19, { align: "center" });
        if (i < stats.length - 1) {
          draw(c.border); doc.line(m + cellW * (i + 1), y + 3, m + cellW * (i + 1), y + 23);
        }
      });
      y += 36;
    }

    /* section header helper */
    const secHeader = (title: string, yy: number): number => {
      txt(c.accent); doc.setFont("helvetica", "bold"); doc.setFontSize(7);
      doc.setCharSpace(2); doc.text(title, m, yy); doc.setCharSpace(0);
      draw(c.accent); doc.setLineWidth(0.3); doc.line(m, yy + 2, W - m, yy + 2);
      return yy + 8;
    };

    /* technical specifications */
    y = secHeader("TECHNICAL SPECIFICATIONS", y);
    (product.specifications ?? []).forEach((spec, i) => {
      const ry = y + i * 9;
      if (i % 2 === 0) { fill(c.navyL); doc.rect(m - 2, ry - 5, W - m * 2 + 4, 9, "F"); }
      txt(c.accent); doc.setFont("helvetica", "normal"); doc.setFontSize(7.5);
      doc.text(spec.label, m + 2, ry);
      txt(c.white); doc.setFont("helvetica", "bold");
      doc.text(spec.value, m + 72, ry);
    });
    y += (product.specifications?.length ?? 0) * 9 + 10;

    /* mission profiles */
    const missions = product.droneMissions ?? [];
    if (missions.length) {
      y = secHeader("MISSION PROFILES", y);
      const mW = (W - m * 2 - (missions.length - 1) * 3) / missions.length;
      missions.forEach((miss, i) => {
        const mx = m + i * (mW + 3);
        fill(c.navyM); doc.rect(mx, y, mW, 38, "F");
        draw(c.border); doc.setLineWidth(0.3); doc.rect(mx, y, mW, 38, "S");
        fill(c.accent); doc.rect(mx, y + 36.5, mW * 0.5, 1.5, "F");
        txt(c.accent); doc.setFont("helvetica", "normal"); doc.setFontSize(6);
        doc.text(`${miss.number} / ${miss.tag}`, mx + 4, y + 8);
        txt(c.white); doc.setFont("helvetica", "bold"); doc.setFontSize(8);
        doc.text(miss.title, mx + 4, y + 16);
        txt(c.dim); doc.setFont("helvetica", "normal"); doc.setFontSize(6.5);
        const lines = doc.splitTextToSize(miss.description, mW - 8);
        doc.text(lines.slice(0, 4), mx + 4, y + 23);
      });
      y += 48;
    }

    /* payload configurations */
    const payloads = product.dronePayloads ?? [];
    if (payloads.length) {
      y = secHeader("PAYLOAD CONFIGURATIONS", y);
      const pW = (W - m * 2 - (payloads.length - 1) * 3) / payloads.length;
      payloads.forEach((p, i) => {
        const px = m + i * (pW + 3);
        fill(c.navyL); doc.rect(px, y, pW, 34, "F");
        draw(c.border); doc.setLineWidth(0.3); doc.rect(px, y, pW, 34, "S");
        txt(c.accent); doc.setFont("helvetica", "bold"); doc.setFontSize(16);
        doc.text(p.capacity, px + 4, y + 13);
        txt(c.dim); doc.setFont("helvetica", "normal"); doc.setFontSize(6);
        doc.text(p.unit, px + 4, y + 18);
        txt(c.white); doc.setFont("helvetica", "bold"); doc.setFontSize(7.5);
        doc.text(p.name, px + 4, y + 24);
        txt(c.dim); doc.setFont("helvetica", "normal"); doc.setFontSize(6);
        const lines = doc.splitTextToSize(p.description, pW - 8);
        doc.text(lines.slice(0, 2), px + 4, y + 30);
      });
    }

    /* footer */
    fill(c.navyM); doc.rect(0, H - 18, W, 18, "F");
    draw(c.accent); doc.setLineWidth(0.3); doc.line(0, H - 18, W, H - 18);
    txt(c.accent); doc.setFont("helvetica", "bold"); doc.setFontSize(8);
    doc.text("RDN TECHNOLOGY", m, H - 8);
    txt(c.dim); doc.setFont("helvetica", "normal"); doc.setFontSize(6.5);
    doc.text("OSTİM, Ankara  ·  rdn-defence-2.vercel.app", W / 2, H - 8, { align: "center" });
    doc.text(`${product.name} — Technical Datasheet  ·  Confidential`, W - m, H - 8, { align: "right" });

    doc.save(`${product.name}_Technical_Datasheet_RDN.pdf`);
    setLoading(false);
  };

  return (
    <button
      onClick={handleDownload}
      disabled={loading}
      className="inline-flex items-center gap-2.5 bg-[#29d4ff] px-7 py-3.5 text-[13px] font-semibold uppercase tracking-[2px] text-[#0d1f3c] transition hover:bg-[#66b3ff] disabled:opacity-60 disabled:cursor-not-allowed"
      style={{ clipPath: "polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 0 100%)" }}
    >
      {loading ? (
        <>
          <svg className="animate-spin" width="14" height="14" viewBox="0 0 14 14" fill="none">
            <circle cx="7" cy="7" r="5" stroke="currentColor" strokeWidth="1.5" strokeDasharray="20" strokeDashoffset="10" />
          </svg>
          Generating...
        </>
      ) : (
        <>
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M7 1v8M4 6l3 3 3-3M2 11h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          Download Datasheet
        </>
      )}
    </button>
  );
}
