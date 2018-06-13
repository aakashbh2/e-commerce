import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { LoaderService } from './loader.service';
import { LoaderState } from './loader';

@Component({
    selector: 'loader',
    templateUrl: './loader.component.html',
    styleUrls: ['loader.component.css'],
//TODO animation of loader
    // animations: [
    // trigger('visibility', [
    //   state('true' , style({ display: 'block', opacity: 1 })),
    //   state('false', style({ display: 'none', opacity: 0.5 })),
    //   transition('1 => 0', animate('500ms linear'))
    // ])]
})

export class LoaderComponent implements OnInit, OnDestroy {

  public loading: boolean = false;
  private subscription: Subscription;

  constructor(private loaderService: LoaderService) { }

  ngOnInit() {
        this.subscription = this.loaderService.loaderState
            .subscribe((state: LoaderState) => {
                this.loading = state.show;
            });
    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
}
