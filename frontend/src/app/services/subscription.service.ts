import {Injectable} from '@angular/core';
import {Sub} from "../modules/account/models/sub";

import {HttpClient} from "@angular/common/http";
import {Observable, of, Subject, Subscription} from 'rxjs';
import {UsersService} from "./users.service";
import {Service} from "../modules/account/models/service";
import {AuthorizationService} from "./authorization.service";

@Injectable({
  providedIn: 'root'
})
export class SubscriptionService {

  private subscription: Subscription;

  private subs: Sub[] = [];

  constructor(private http: HttpClient, private usersService: UsersService) {

  }

  clear() {
    this.subs = [];
    this.subscription.unsubscribe();
  }

  getSubscriptions(): Sub[] {
    return this.subs;
  }

  isThereSubscriptionToService(service: Service): boolean {
    let f = false;
    if (this.subs != undefined) {
      this.subs.forEach(sub => {
        if (sub.service.id === service.id) f = true;
      });
    }
    return f;
  }


  private fapiServerUrl: string = 'http://localhost:8081/api/subscriptions';

  getSubscriptionsFromFapi(sort: string = 'byName', trend: string = 'up') {
    if (this.usersService.getActiveUser() != undefined) {
      if (this.subscription) this.subscription.unsubscribe();
      this.subscription = this.http.get<Sub[]>(this.fapiServerUrl + '?id=' + this.usersService.getActiveUser().id + '&sort=' + sort + '&trend=' + trend)
        .subscribe(subscriptions => {
          this.subs = subscriptions;
        });
    }
  }

  subscribeToService(service: Service): Observable<Sub> {
    let sub: Sub = new Sub(null, this.usersService.getActiveUser().id, null, null, null, service);
    return this.http.post<Sub>(this.fapiServerUrl, sub);
  }

  changeSubscriptionStatus(sub: Sub): Observable<Sub> {
    return this.http.put<Sub>(this.fapiServerUrl + '/' + sub.id, sub);
  }

  deleteSubscription(id: number): Observable<void> {
    return this.http.delete<void>(this.fapiServerUrl + '/' + id);
  }

  deleteSubscriptionByServiceId(id: number): Observable<void> {
    let sub = this.getSubscriptions().find(value => value.userId === this.usersService.getActiveUser().id && value.service.id === id);
    return this.deleteSubscription(sub.id);
  }


}
