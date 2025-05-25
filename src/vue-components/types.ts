export interface ProductFormData {
  itemType: "product" | "service";
  productName: string;
  category: string;
  brand: string;
  sku: string;
  barcode: string;
  trackInventory: boolean;
  taxExemption: string;
  shippingExempt: boolean;
  available: boolean;
  sellingPrice: number;
  description: string;
}

export interface ProductFormProps {
  initialData?: Partial<ProductFormData>;
  onSave?: (data: ProductFormData) => void;
  onBack?: () => void;
}
