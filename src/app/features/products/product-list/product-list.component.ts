import { Component, input } from '@angular/core';
import type { ProductCard } from '../product';
import { ProductCardComponent } from '../product-card/product-card.component';

@Component({
  selector: 'app-product-list',
  imports: [ProductCardComponent],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css',
})
export class ProductListComponent {
  readonly products = input.required<ProductCard[]>();
}
