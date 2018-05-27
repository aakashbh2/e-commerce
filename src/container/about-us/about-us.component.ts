import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
    selector: 'about-us',
    templateUrl: './about-us.component.html',
    styleUrls: ['about-us.component.css'],
    providers: []
})

export class AboutUsComponent {

  constructor (private titleService: Title) {
    this.titleService.setTitle('About Us');
  }
}
