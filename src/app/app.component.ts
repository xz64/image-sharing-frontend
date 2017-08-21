import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { UserService } from './user/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnDestroy {
  private subscription: Subscription;

  constructor(private userService: UserService) {
    this.subscription = this.userService.checkAuthenticated().subscribe();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
