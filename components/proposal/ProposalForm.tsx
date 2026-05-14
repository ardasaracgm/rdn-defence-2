"use client";

import { useState } from "react";
import ProposalPreview from "./ProposalPreview";
import { defaultProposal, ProposalData } from "./proposal-data";

export default function ProposalForm() {
  const [data, setData] = useState<ProposalData>(defaultProposal);

  function update<K extends keyof ProposalData>(key: K, value: ProposalData[K]) {
    setData((prev) => ({ ...prev, [key]: value }));
  }

  function updateItem(index: number, key: "description" | "quantity" | "unitPrice" | "discount", value: string | number) {
    const items = [...data.items];
    items[index] = { ...items[index], [key]: value } as any;
    setData({ ...data, items });
  }

  function addItem() {
    setData({
      ...data,
      items: [...data.items, { description: "New Product", quantity: 1, unitPrice: 0, discount: 0 }],
    });
  }

  return (
    <main className="min-h-screen bg-slate-100 p-6 print:bg-white print:p-0">
      <div className="mx-auto mb-6 max-w-5xl rounded-2xl bg-white p-5 shadow print:hidden">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl font-black text-slate-900">RDN Proposal Generator</h1>
            <p className="text-sm text-slate-500">Commercial offer / proforma invoice oluşturma ekranı</p>
          </div>
          <button onClick={() => window.print()} className="rounded-xl bg-[#06162f] px-5 py-3 text-sm font-bold text-white">
            PDF / Print
          </button>
        </div>

        <div className="mt-5 grid grid-cols-1 gap-3 md:grid-cols-4">
          <Input label="Offer No" value={data.offerNo} onChange={(v) => update("offerNo", v)} />
          <Input label="Date" value={data.date} onChange={(v) => update("date", v)} />
          <Input label="Validity" value={data.validity} onChange={(v) => update("validity", v)} />
          <Input label="Prepared By" value={data.preparedBy} onChange={(v) => update("preparedBy", v)} />
          <Input label="Customer" value={data.customerName} onChange={(v) => update("customerName", v)} />
          <Input label="Country" value={data.customerCountry} onChange={(v) => update("customerCountry", v)} />
          <Input label="Exchange Rate" value={String(data.exchangeRate)} onChange={(v) => update("exchangeRate", Number(v))} />
          <Input label="Delivery Term" value={data.deliveryTerm} onChange={(v) => update("deliveryTerm", v)} />
        </div>

        <div className="mt-5 rounded-xl border p-4">
          <div className="mb-3 flex items-center justify-between">
            <h2 className="font-bold">Product Items</h2>
            <button onClick={addItem} className="rounded-lg bg-slate-900 px-3 py-2 text-xs font-bold text-white">
              + Add Item
            </button>
          </div>
          {data.items.map((item, i) => (
            <div key={i} className="mb-3 grid grid-cols-1 gap-3 md:grid-cols-4">
              <Input label="Description" value={item.description} onChange={(v) => updateItem(i, "description", v)} />
              <Input label="Quantity" value={String(item.quantity)} onChange={(v) => updateItem(i, "quantity", Number(v))} />
              <Input label="Unit Price" value={String(item.unitPrice)} onChange={(v) => updateItem(i, "unitPrice", Number(v))} />
              <Input label="Discount %" value={String(item.discount)} onChange={(v) => updateItem(i, "discount", Number(v))} />
            </div>
          ))}
        </div>
      </div>

      <ProposalPreview data={data} />
    </main>
  );
}

function Input({ label, value, onChange }: { label: string; value: string; onChange: (value: string) => void }) {
  return (
    <label className="block">
      <span className="mb-1 block text-xs font-bold text-slate-500">{label}</span>
      <input
        className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm outline-none focus:border-[#06162f]"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </label>
  );
}
