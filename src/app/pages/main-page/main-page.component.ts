import { Component, inject } from '@angular/core';
import { ProductListComponent } from '../../features/products/product-list/product-list.component';
import { ProductsService } from '../../features/products/products.service';
import { toSignal } from '@angular/core/rxjs-interop';
@Component({
  selector: 'app-main-page',
  imports: [ProductListComponent],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.css',
})
export class MainPageComponent {
  protected readonly productsService = inject(ProductsService);
  protected readonly products = toSignal(this.productsService.getProducts(), { initialValue: [] });
}
