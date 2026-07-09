import { Component, input, inject } from '@angular/core';
import type { ProductCard } from '../product';
import { CurrencyPipe } from '@angular/common';
import { TruncatePipe } from '../../../shared/pipes/truncate.pipe';
import { RouterLink } from '@angular/router';
import { CartService } from '../../cart/cart.service';

@Component({
  selector: 'app-product-card',
  imports: [CurrencyPipe, TruncatePipe, RouterLink],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css',
})
export class ProductCardComponent {
  readonly product = input.required<ProductCard>();
  private readonly cartService = inject(CartService);

  protected addToCart(): void {
    this.cartService.addToCart(this.product());
  }
}
