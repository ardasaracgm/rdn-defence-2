export type ProposalItem = {
  description: string;
  quantity: number;
  unitPrice: number;
  discount: number;
};

export type ProposalData = {
  offerNo: string;
  date: string;
  validity: string;
  preparedBy: string;
  phone: string;
  email: string;
  customerName: string;
  customerCountry: string;
  currency: "USD" | "EUR";
  exchangeRate: number;
  deliveryTerm: string;
  paymentTerm: string;
  productionLeadTime: string;
  deliveryTime: string;
  items: ProposalItem[];
};

export const defaultProposal: ProposalData = {
  offerNo: "RDN2026-34",
  date: "13.05.2026",
  validity: "17 Days",
  preparedBy: "Arda Saraç",
  phone: "+90 536 446 11 35",
  email: "arda@rdnsoft.com",
  customerName: "100 ton so z.o.o",
  customerCountry: "Tanzania",
  currency: "USD",
  exchangeRate: 45.4805,
  deliveryTerm: "FOB Tanzania",
  paymentTerm: "100% advance payment via bank transfer.",
  productionLeadTime:
    "The production period shall commence upon receipt of payment in our bank account and shall be completed within 30 days.",
  deliveryTime:
    "The delivery period shall be 7 business days following the completion of product loading.",
  items: [
    { description: "White Falcon A1", quantity: 1000, unitPrice: 3100, discount: 0 },
  ],
};

export function subtotal(items: ProposalItem[]) {
  return items.reduce((sum, item) => {
    const gross = item.quantity * item.unitPrice;
    return sum + gross - gross * (item.discount / 100);
  }, 0);
}

export function money(value: number, currency = "USD") {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency,
    minimumFractionDigits: 2,
  }).format(value);
}
