import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
    selector: 'shopping-cart',
    templateUrl: './shopping-cart.component.html',
    styleUrls: ['shopping-cart.component.css'],
    providers: []
})

export class ShoppingCartComponent {

  constructor (private titleService: Title) {
    this.titleService.setTitle('Shopping Bag');
  }
}
