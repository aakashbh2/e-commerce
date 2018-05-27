import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
    selector: 'contact-us',
    templateUrl: './contact-us.component.html',
    styleUrls: ['contact-us.component.css'],
    providers: []
})

export class ContactUsComponent {
  constructor (private titleService: Title) {
    this.titleService.setTitle('Contact Us');
  }
}
