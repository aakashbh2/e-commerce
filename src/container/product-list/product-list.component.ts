import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { LoaderService } from '../../components/loader/loader.service';
import { Http } from "@angular/http";
import { Observable } from "rxjs";

@Component({
    selector: 'product-list',
    templateUrl: './product-list.component.html',
    styleUrls: ['product-list.component.css'],
    providers: []
})

export class ProductListComponent implements OnInit {
  public productList: Array<any> = [];
  public category: string = 'all';
  constructor (private titleService: Title, private loaderService: LoaderService,
     private http: Http, private route: ActivatedRoute) {
    this.titleService.setTitle('Shop');
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.category = params['id'];
    });
    this.getData();
  }

  getData() {
    this.http.get('/rest/api/product-overview?id='+ this.category).subscribe((res: any) => {
      this.productList = (JSON.parse(res._body));
    }, err => {
        console.log('error at home page', err);
    });
  }


}
