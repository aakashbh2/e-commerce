import { Component, Input } from '@angular/core';


import * as CONST from './constants';

@Component({
    selector: 'product-overview',
    templateUrl: './product-overview.component.html',
    styleUrls: ['product-overview.component.css'],
    providers: []
})
export class ProductOverviewComponent {
    @Input() filterList = CONST.FILTER_LIST;
    @Input() productList: Array<any>;
}
