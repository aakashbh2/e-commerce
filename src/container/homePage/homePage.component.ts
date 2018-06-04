import { Component, OnInit } from '@angular/core';
import { LoaderService } from '../../components/loader/loader.service';

@Component({
    selector: 'homePage',
    templateUrl: './homePage.component.html',
    styleUrls: ['homePage.component.css'],
    providers: []
})

export class HomePageComponent implements OnInit{

  constructor(private loaderService: LoaderService) { }

  ngOnInit() {
  }

}
