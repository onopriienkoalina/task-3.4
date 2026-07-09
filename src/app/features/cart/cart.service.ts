import { Injectable, computed, signal } from '@angular/core';
import type { ProductCard } from '../products/product';

export interface CartItem {
  product: ProductCard;
  quantity: number;
}

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private readonly cartItems = signal<CartItem[]>([]);

  readonly items = this.cartItems.asReadonly();

  readonly totalQuantity = computed(() =>
    this.cartItems().reduce((total, item) => total + item.quantity, 0),
  );

  addToCart(product: ProductCard, quantity = 1): void {
    const safeQuantity = Math.max(1, quantity);

    this.cartItems.update((items) => {
      const existingItem = items.find((item) => item.product.id === product.id);

      if (!existingItem) {
        return [...items, { product, quantity: safeQuantity }];
      }

      return items.map((item) =>
        item.product.id === product.id ? { ...item, quantity: item.quantity + safeQuantity } : item,
      );
    });
  }
}
