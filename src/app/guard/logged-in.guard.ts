import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { UserService } from '../user/user.service';

@Injectable()
class LoggedInGuard implements CanActivate {

  constructor(private userService: UserService) {}

  canActivate() {
    return this.userService.checkAuthenticated();
  }
}

export { LoggedInGuard } ;
