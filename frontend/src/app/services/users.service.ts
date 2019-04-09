import {Injectable} from '@angular/core';

import {Observable, of} from 'rxjs';
import {User} from "../modules/account/models/user";
import {USERS} from "../modules/account/models/mock-users";
import {BillingAccount} from "../modules/account/models/billing-account";
import {BILLINGACCOUNTS} from "../modules/account/models/mock-billing-accounts";
import {BillingAccountComponent} from "../modules/account/components/billing-account/billing-account.component";
import {BillingAccountService} from "./billing-account.service";


@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private activeUser: User;

  getUsers(): Observable<User[]> {
    return of(USERS);
  }

  setActiveUser(user: User) {
    this.activeUser = user;
  }

  getActiveUser(): User {
    return this.activeUser;
  }

  constructor() {
    this.activeUser = USERS[0];
  }

}
