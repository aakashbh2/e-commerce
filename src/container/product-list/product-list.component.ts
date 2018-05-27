import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
    selector: 'product-list',
    templateUrl: './product-list.component.html',
    styleUrls: ['product-list.component.css'],
    providers: []
})

export class ProductListComponent {
  constructor (private titleService: Title) {
    this.titleService.setTitle('Shop');
  }
}
