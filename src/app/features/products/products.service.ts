import { Injectable } from '@angular/core';
import type { Product, DiscountTheme, ProductCard } from './product';
import { products } from '../../../assets/products.data';
import { Observable, of, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private readonly products: Product[] = products;

  getProducts(): Observable<ProductCard[]> {
    return of(this.products).pipe(
      map((productList) =>
        productList.map((product, index) => this.mapToProductCard(product, index)),
      ),
    );
  }

  private mapToProductCard(product: Product, index: number): ProductCard {
    const discountPercent = this.calculateDiscountPercent(product);

    return {
      ...product,
      discountPercent,
      discountTheme: this.getDiscountTheme(discountPercent),
      isMain: index === 0,
    };
  }

  private calculateDiscountPercent(product: Product): number {
    return Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100);
  }

  private getDiscountTheme(discountPercent: number): DiscountTheme {
    if (discountPercent >= 70) {
      return 70;
    }

    if (discountPercent >= 60) {
      return 60;
    }

    return 50;
  }

  getProductById(id: number): Observable<ProductCard | undefined> {
    return this.getProducts().pipe(
      map((products) => products.find((product) => product.id === id)),
    );
  }
}
