import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/toPromise';

@Injectable()
class UserService {
  public loggedInCheck: BehaviorSubject<boolean>;
  public csrfToken: string;

  constructor (private http: Http) {
    this.loggedInCheck = new BehaviorSubject(false);
  }

  checkAuthenticated() {
    return this.http.get('/api/session/authentication')
      .map((res: Response) => res.json())
      .map(x => x.authenticated)
      .do(authenticated => {
        if (authenticated) {
          this.http.get('/api/csrfToken')
          .map((res: Response) => res.json())
          .toPromise()
          .then(obj => {
            this.csrfToken = obj.csrfToken;
          });
        }
        this.loggedInCheck.next(authenticated);
      });
  }

  logout() {
    const headers = new Headers();
    headers.append('xsrf-token', this.csrfToken);
    return this.http.post('/api/session/logout', null, { headers })
    .toPromise()
    .then(() => {
      this.loggedInCheck.next(false);
    });
  }
}

export { UserService };
