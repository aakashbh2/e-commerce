import { Component, Input } from '@angular/core';
import * as CONST from './constants';

@Component({
    selector: 'header-bar',
    templateUrl: './header.component.html',
    styleUrls: ['header.component.css'],
    providers: []
})

export class HeaderComponent {
  public topBar: string = 'Free shipping for standard order over $100.';
  @Input() headerItems = CONST.HEADER_ITEMS;

}
