import {Injectable} from '@angular/core';
import {Subscription} from "../modules/account/models/subscription";
import {SUBSCRIPTIONS} from "../modules/account/models/mock-subscriptions";

import {Observable, of} from 'rxjs';
import {UsersService} from "./users.service";

@Injectable({
  providedIn: 'root'
})
export class SubscriptionService {


  getSubscriptions(): Observable<Subscription[]> {
    return of(SUBSCRIPTIONS.filter(sub => sub.userId == this.usersService.getActiveUser().id));
  }

  constructor(private usersService: UsersService) {
  }

}
