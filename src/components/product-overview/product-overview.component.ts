import { Component, Input } from '@angular/core';
import {Http} from "@angular/http";
import {Observable} from "rxjs";

import * as CONST from './constants';

@Component({
    selector: 'product-overview',
    templateUrl: './product-overview.component.html',
    styleUrls: ['product-overview.component.css'],
    providers: []
})
export class ProductOverviewComponent {
    @Input() filterList = CONST.FILTER_LIST;

    constructor(private http: Http) {
      this.getData();
    }

    getData() {
      return this.http.get('/rest/api/product-overview').subscribe((res: any) => {
        console.log(JSON.parse(res._body));
      }, err => {
          console.log('erroe', err);
      });
    }
}
