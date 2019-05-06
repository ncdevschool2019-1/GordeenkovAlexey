import {Injectable} from '@angular/core';

import {Observable, of, Subscription} from 'rxjs';
import {User} from "../modules/account/models/user";
import {HttpClient} from "@angular/common/http";
import {RegUser} from "../modules/header/models/RegUser";
import {AuthorizationService} from "./authorization.service";
import {TokenService} from "./token.service";


@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private activeUser: User;
  private path: string = 'http://localhost:8081/api/users';

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.path);
  }


  setActiveUser(user: User) {
    this.activeUser = user;
  }

  getActiveUser(): User {
    if (this.isAdmin()) {
    return this.activeUser;
    } else return this.authService.getAuthorizedUser();
  
  }

  public saveUser(user: RegUser): Observable<User> {
    return this.http.post<User>(this.path, user);
  }

  public getUserByUsername(username: string): Observable<User> {
    return this.http.get<User>(this.path + '/username/' + username);
  }

  constructor(private authService: AuthorizationService, private http: HttpClient, private tokenService: TokenService) {

  }

  private isAuthorized(): boolean {
    return this.authService.getAuthorizedUser() === null ? false : true;
  }

  private isUser(): boolean {
    if (!this.isAuthorized()) return false;
    return this.authService.getAuthorizedUser().role.name === "User";
  }

  private isAdmin(): boolean {
    if (!this.isAuthorized()) return false;
    return this.authService.getAuthorizedUser().role.name === "Admin";
  }

}
