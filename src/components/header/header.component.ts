import { Component, OnInit } from '@angular/core';
import * as CONST from './constants';

@Component({
    selector: 'header-bar',
    templateUrl: './header.component.html',
    styleUrls: ['header.component.css'],
    providers: []
})

export class HeaderComponent implements OnInit{
  public topBar: string = 'Free shipping for standard order over $100.';
  public headerItems;

  ngOnInit() {
    this.headerItems = CONST.headerItems;
  }
}
