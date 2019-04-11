import {Injectable} from '@angular/core';

import {Observable, of} from 'rxjs';
import {User} from "../modules/account/models/user";
import {USERS} from "../modules/account/models/mock-users";
import {HttpClient} from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private activeUser: User;

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>('http://localhost:8081/api/users')
  }

  setActiveUser(user: User) {
    this.activeUser = user;
  }

  getActiveUser(): User {
    return this.activeUser;
  }

  constructor(private http: HttpClient) {
    this.activeUser = USERS[0];
  }

}
