import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { UserService } from '../user/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit, OnDestroy {
  private subscription: Subscription;
  private loggedIn = false;

  constructor(private userService: UserService) {
    this.subscription = userService.loggedInCheck.subscribe((loggedIn) => {
      this.loggedIn = loggedIn;
    });
  }

  logout() {
    this.userService.logout();
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
