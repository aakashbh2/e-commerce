import { Component, Input } from '@angular/core';
import * as CONST from './constants';

@Component({
    selector: 'carousel-overview',
    templateUrl: './carousel.component.html',
    styleUrls: ['carousel.component.css'],
    providers: []
})

export class CarouselComponent {
  @Input() carouselDetails = CONST.CAROUSEL_DETAILS;
}
