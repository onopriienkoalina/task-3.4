export type DiscountTheme = 70 | 60 | 50;
export interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  oldPrice: number;
  imageUrl: string;
  galleryImages: string[];
  rating: string;
}
export interface ProductCard extends Product {
  discountPercent: number;
  discountTheme: DiscountTheme;
  isMain: boolean;
}
