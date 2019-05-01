import {Injectable} from '@angular/core';
import {Observable, Subject} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {User} from "../modules/account/models/user";
import {LogUser} from "../modules/header/models/LogUser";
import {AuthorizationToken} from "../modules/header/models/AuthorizationToken";

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {

  private authorizedUser: User = null;

  private path = 'http://localhost:8081/api/auth';

  constructor(private http: HttpClient) {

  }

  public setAuthorizedUser(user: User) {
    this.authorizedUser = user;
  }

  public getAuthorizedUser() {

  }

  attemptAuthorize(user: LogUser): Observable<AuthorizationToken> {
    return this.http.post<AuthorizationToken>(this.path + '/signin', user);
  }

  public leaveAccount() {
    this.authorizedUser = null;
  }


}
