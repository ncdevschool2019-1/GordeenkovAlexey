import {Injectable} from '@angular/core';
import {Observable, Subject, Subscription} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {LogUser} from "../modules/header/models/LogUser";
import {AuthorizationToken} from "../modules/header/models/AuthorizationToken";
import {User} from "../modules/account/models/user";
import {TokenService} from "./token.service";
import {SubscriptionService} from "./subscription.service";

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {

  private authorizedUser: User = null;

  private path = 'http://localhost:8081/api/auth';


  private readySubject: Subject<any> = new Subject<any>();

  private ready = false;

  public setReady() {
    this.ready = true;
    this.readySubject.next(this.ready);
  }

  public clearSubject() {
    this.readySubject.next();
  }

  public getUserAuthorizedSubject(): Observable<any> {
    if (this.ready) {
      setTimeout(() => {
        this.readySubject.next(this.ready)
      }, 100);
    }
    return this.readySubject.asObservable();
  }


  constructor(private http: HttpClient, private tokenService: TokenService) {

  }

  public setAuthorizedUser(user: User) {
    this.authorizedUser = user;
  }

  public getAuthorizedUser() {
    return this.authorizedUser;
  }

  attemptAuthorize(user: LogUser): Observable<AuthorizationToken> {
    return this.http.post<AuthorizationToken>(this.path + '/signin', user);
  }

  public leaveAccount() {
    this.authorizedUser = null;
    this.tokenService.signOut();
  }

  isAuthorized(): boolean {
    return this.getAuthorizedUser() != null ? true : false;
  }

  isUser(): boolean {
    if (!this.isAuthorized()) return false;
    return this.getAuthorizedUser().role.name === "User" ? true : false;
  }

  isAdmin(): boolean {
    if (!this.isAuthorized()) return false;
    return this.getAuthorizedUser().role.name === "Admin" ? true : false;
  }

}
