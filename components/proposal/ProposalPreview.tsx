"use client";

import { ProposalData, money, subtotal } from "./proposal-data";

export default function ProposalPreview({ data }: { data: ProposalData }) {
  const total = subtotal(data.items);
  const tryTotal = total * data.exchangeRate;

  return (
    <div className="mx-auto w-full max-w-5xl overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl print:rounded-none print:border-0 print:shadow-none">
      <div className="grid grid-cols-12 gap-6 bg-[#06162f] p-8 text-white">
        <div className="col-span-4 flex items-center">
          <div className="text-5xl font-black tracking-tight">RDN</div>
          <div className="ml-3 text-sm tracking-[0.35em] text-slate-300">TEKNOLOJİ</div>
        </div>

        <div className="col-span-4 border-l border-white/20 pl-6 text-xs leading-6 text-slate-200">
          <p className="font-semibold text-white">
            RDN Danışmanlık Yazılım Turizm Gıda Sanayi ve Dış Ticaret Limited Şirketi
          </p>
          <p>Kızılırmak Mah. Dumlupınar Bulvarı No:9A</p>
          <p>YDA Center Daire:158 Çankaya / Ankara</p>
          <p>Çankaya V.D: 7342274416</p>
        </div>

        <div className="col-span-4 text-right">
          <h1 className="text-3xl font-black tracking-tight">PROFORMA INVOICE</h1>
          <p className="mt-1 text-lg font-semibold text-violet-300">COMMERCIAL OFFER</p>
          <div className="mt-5 space-y-1 text-xs text-slate-200">
            <p>TEKLİF NO / OFFER NO: <b>{data.offerNo}</b></p>
            <p>TARİH / DATE: <b>{data.date}</b></p>
            <p>GEÇERLİLİK / VALIDITY: <b>{data.validity}</b></p>
            <p>HAZIRLAYAN / PREPARED BY: <b>{data.preparedBy}</b></p>
          </div>
        </div>
      </div>

      <div className="p-8">
        <div className="grid grid-cols-2 gap-5">
          <section className="rounded-xl border border-slate-200 p-5">
            <h2 className="mb-4 inline-block rounded-r-xl bg-[#06162f] px-4 py-2 text-sm font-bold text-white">
              CUSTOMER / MÜŞTERİ
            </h2>
            <p className="text-lg font-bold text-slate-900">{data.customerName}</p>
            <p className="mt-1 text-slate-600">{data.customerCountry}</p>
          </section>

          <section className="rounded-xl border border-slate-200 p-5">
            <h2 className="mb-3 text-sm font-bold text-slate-900">
              COMMERCIAL SUMMARY / ÖZET BİLGİLER
            </h2>
            <div className="grid grid-cols-2 border-t border-slate-200 text-sm">
              <div className="border-b border-slate-200 py-2 text-slate-600">Currency</div>
              <div className="border-b border-slate-200 py-2 font-bold">{data.currency}</div>
              <div className="border-b border-slate-200 py-2 text-slate-600">Exchange Rate</div>
              <div className="border-b border-slate-200 py-2 font-bold">{data.exchangeRate}</div>
              <div className="py-2 text-slate-600">TRY Equivalent</div>
              <div className="py-2 font-bold">{tryTotal.toLocaleString("tr-TR")} TL</div>
            </div>
          </section>
        </div>

        <table className="mt-8 w-full overflow-hidden rounded-xl text-sm">
          <thead>
            <tr className="bg-[#06162f] text-white">
              <th className="p-4 text-left">ITEM</th>
              <th className="p-4 text-left">DESCRIPTION / AÇIKLAMA</th>
              <th className="p-4 text-center">QTY</th>
              <th className="p-4 text-right">UNIT PRICE</th>
              <th className="p-4 text-right">TOTAL</th>
            </tr>
          </thead>
          <tbody>
            {data.items.map((item, index) => {
              const totalLine = item.quantity * item.unitPrice * (1 - item.discount / 100);
              return (
                <tr key={index} className="border-b border-slate-200">
                  <td className="p-4 font-semibold">{String(index + 1).padStart(2, "0")}</td>
                  <td className="p-4">{item.description}</td>
                  <td className="p-4 text-center">{item.quantity}</td>
                  <td className="p-4 text-right">{money(item.unitPrice, data.currency)}</td>
                  <td className="p-4 text-right font-bold">{money(totalLine, data.currency)}</td>
                </tr>
              );
            })}
            <tr>
              <td colSpan={3}></td>
              <td className="bg-slate-50 p-4 font-bold">TOTAL</td>
              <td className="bg-[#06162f] p-4 text-right text-xl font-black text-white">
                {money(total, data.currency)}
              </td>
            </tr>
          </tbody>
        </table>

        <div className="mt-8 rounded-xl border border-slate-200 p-5">
          <h2 className="mb-4 text-sm font-black text-[#06162f]">
            TEKLİF ŞARTLARI / TERMS & CONDITIONS
          </h2>
          <div className="grid grid-cols-5 gap-4 text-xs">
            <Info title="DELIVERY TERM" value={data.deliveryTerm} />
            <Info title="PAYMENT TERM" value={data.paymentTerm} />
            <Info title="PRODUCTION LEAD TIME" value={data.productionLeadTime} />
            <Info title="DELIVERY TIME" value={data.deliveryTime} />
            <Info title="VALIDITY" value={data.validity} />
          </div>
        </div>

        <div className="mt-8 grid grid-cols-2 gap-5">
          <section className="rounded-xl border border-slate-200 p-5 text-sm">
            <h2 className="mb-3 font-black text-[#06162f]">BANK INFORMATION</h2>
            <p><b>Bank:</b> Yapı ve Kredi Bankası A.Ş.</p>
            <p><b>Branch:</b> Ankara / Çukurambar Şubesi (561)</p>
            <p><b>Swift:</b> YAPITRISXXX</p>
          </section>
          <section className="rounded-xl border border-slate-200 p-5 text-sm">
            <p><b>TL IBAN:</b> TR14 0006 7010 0000 0078 9695 83</p>
            <p><b>EUR IBAN:</b> TR49 0006 7010 0000 0078 9633 27</p>
            <p><b>USD IBAN:</b> TR41 0006 7010 0000 0078 8693 81</p>
          </section>
        </div>
      </div>

      <div className="bg-[#06162f] px-8 py-5 text-center text-sm text-white">
        www.rdnsoft.com • info@rdnsoft.com • +90 536 446 11 35 • Ankara / Türkiye
      </div>
    </div>
  );
}

function Info({ title, value }: { title: string; value: string }) {
  return (
    <div className="border-r border-slate-200 pr-3 last:border-r-0">
      <p className="mb-2 font-bold text-[#06162f]">{title}</p>
      <p className="leading-5 text-slate-600">{value}</p>
    </div>
  );
}
