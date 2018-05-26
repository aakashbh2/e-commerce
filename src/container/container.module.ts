import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { RouterModule } from '@angular/router';

import { BasicModule } from '../components/basic.module';

import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { HomePageComponent } from './homePage/homePage.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { ProductDescComponent } from './product-desc/product-desc.component';

@NgModule({
    declarations: [
        ShoppingCartComponent,
        AboutUsComponent,
        HomePageComponent,
        ProductListComponent,
        ContactUsComponent,
        ProductDescComponent
    ],
    exports: [
      ShoppingCartComponent,
      AboutUsComponent,
      HomePageComponent,
      ProductListComponent,
      ContactUsComponent,
      ProductDescComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        BasicModule
    ],
    providers: []
})

export class ContainerModule {
}
