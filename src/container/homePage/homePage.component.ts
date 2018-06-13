import { Component, OnInit } from '@angular/core';
import { LoaderService } from '../../components/loader/loader.service';
import {Http} from "@angular/http";
import {Observable} from "rxjs";

@Component({
    selector: 'homePage',
    templateUrl: './homePage.component.html',
    styleUrls: ['homePage.component.css'],
    providers: []
})

export class HomePageComponent implements OnInit {

  public productList: Array<any>;
  public product;
  constructor(private loaderService: LoaderService, private http: Http) { }
  ngOnInit() {
    this.getData();
  }

  getData() {
    this.http.get('/rest/api/product-overview').subscribe((res: any) => {
      this.productList = (JSON.parse(res._body));
    }, err => {
        console.log('error at home page', err);
    });
  }

}
