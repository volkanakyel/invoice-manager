export interface InvoiceItem {
  name: string;
  quantity: number;
  price: number;
  total: number;
}

export interface ProviderInfos {
  street: string;
  city: string;
  postCode: string;
  country: string;
}

export interface ClientInfos {
  street: string;
  city: string;
  postCode: string;
  country: string;
}

export interface Invoice {
  id: string;
  createdAt?: string;
  paymentDue?: string;
  description: string;
  paymentTerms: number;
  clientName: string;
  clientEmail: string;
  status: string;
  senderAddress: ProviderInfos;
  clientAddress: ClientInfos;
  items: InvoiceItem[];
  total: number;
}
