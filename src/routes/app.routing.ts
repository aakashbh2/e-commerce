import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomePageComponent } from '../container/homePage/homePage.component';
import { ShoppingCartComponent } from '../container/shopping-cart/shopping-cart.component';
import { AboutUsComponent } from '../container/about-us/about-us.component';
import { ProductListComponent } from '../container/product-list/product-list.component';
import { ContactUsComponent } from '../container/contact-us/contact-us.component';
import { ProductDescComponent } from '../container/product-desc/product-desc.component';
import { LoginComponent } from '../container/login/login.component';

export const routing: Routes = [
  {	path: '', component: HomePageComponent},
  {	path: 'shop/:id', component: ProductListComponent},
  {	path: 'product/:id/buy', component: ProductDescComponent},
  {	path: 'checkout/cart', component: ShoppingCartComponent},
  {	path: 'contact-us', component: ContactUsComponent},
  {	path: 'about-us', component: AboutUsComponent},
  {	path: 'sign-in', component: LoginComponent},
  { path: '**', redirectTo: '', pathMatch: 'full' }
];
