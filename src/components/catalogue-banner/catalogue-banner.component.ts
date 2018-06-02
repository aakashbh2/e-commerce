import { Component, Input } from '@angular/core';
import * as CONST from './constants';

@Component({
    selector: 'catalogue-banner-overview',
    templateUrl: './catalogue-banner.component.html',
    styleUrls: ['catalogue-banner.component.css'],
    providers: []
})

export class CatalogueBannerComponent {
  @Input() bannerList = CONST.BANNER_LIST;
}
