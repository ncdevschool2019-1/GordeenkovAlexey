import {Injectable} from '@angular/core';

import {Observable, of, Subscription} from 'rxjs';
import {User} from "../modules/account/models/user";
import {HttpClient} from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private activeUser: User;
  private users: User[] = [];
  private subscriptions: Subscription[] = [];

  getUsersFromFapi() {

    this.subscriptions.push(this.http.get<User[]>('http://localhost:8081/api/users')
      .subscribe(users => this.users = users));
    if (this.activeUser === undefined) {
      this.subscriptions.push(this.http.get<User[]>('http://localhost:8081/api/users')
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

    return this.activeUser;
  }

  constructor(private http: HttpClient) {
  }

}
