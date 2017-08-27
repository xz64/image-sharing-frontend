import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-routed-user-images',
  templateUrl: './routed-user-images.component.html',
  styleUrls: ['./routed-user-images.component.scss']
})
export class RoutedUserImagesComponent implements OnInit, OnDestroy {
  routeSubscription: Subscription;
  userId: string;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.routeSubscription = this.route.params.subscribe(params => {
      this.userId = params.userId;
    });
  }

  ngOnDestroy() {
    this.routeSubscription.unsubscribe();
  }

}
