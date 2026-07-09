import { Routes } from '@angular/router';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { ProductDetailsPageComponent } from './pages/product-details-page/product-details-page.component';

export const routes: Routes = [
  { path: '', component: MainPageComponent },
  { path: 'contacts', component: ContactPageComponent },
  { path: 'products/:id', component: ProductDetailsPageComponent },
];
