import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { RouterModule } from '@angular/router';

import { FooterComponent } from "./footer/footer.component";
import { ProductOverviewComponent } from './product-overview/product-overview.component';
import { ProductPreviewComponent } from './product-preview/product-preview.component';
import { CatalogueBannerComponent } from './catalogue-banner/catalogue-banner.component';
import { CarouselComponent } from './carousel/carousel.component';
import { CartSummaryComponent } from './cart-summary/cart-summary.component';
import { HeaderComponent } from './header/header.component';
import { RelatedProductsComponent } from './related-products/related-products.component';

@NgModule({
    declarations: [
        FooterComponent,
        ProductOverviewComponent,
        ProductPreviewComponent,
        CatalogueBannerComponent,
        CarouselComponent,
        CartSummaryComponent,
        HeaderComponent,
        RelatedProductsComponent
    ],
    exports: [
      FooterComponent,
      ProductOverviewComponent,
      ProductPreviewComponent,
      CatalogueBannerComponent,
      CarouselComponent,
      CartSummaryComponent,
      HeaderComponent,
      RelatedProductsComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule
    ],
    providers: []
})

export class BasicModule {
}
