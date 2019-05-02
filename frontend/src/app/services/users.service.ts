import {Injectable} from '@angular/core';

import {Observable, of, Subscription} from 'rxjs';
import {User} from "../modules/account/models/user";
import {HttpClient} from "@angular/common/http";
import {RegUser} from "../modules/header/models/RegUser";
import {AuthorizationService} from "./authorization.service";


@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private activeUser: User;
  private users: User[] = [];
  private subscriptions: Subscription[] = [];
  private path: string = 'http://localhost:8081/api/users';

  getUsersFromFapi() {
    this.subscriptions.push(this.http.get<User[]>(this.path)
      .subscribe(users => this.users = users));
    if (this.activeUser === undefined) {
      this.subscriptions.push(this.http.get<User[]>(this.path)
        .subscribe(users => this.activeUser = users[0]));

    }
  }


  getUsers(): User[] {
    return this.users;
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

  constructor(private authService: AuthorizationService, private http: HttpClient) {
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
