import {Injectable} from '@angular/core';
import {Sub} from "../modules/account/models/sub";

import {HttpClient} from "@angular/common/http";
import {Observable, of, Subscription} from 'rxjs';
import {UsersService} from "./users.service";
import {Service} from "../modules/catalog/models/service";
import {BillingAccount} from "../modules/account/models/billing-account";

@Injectable({
  providedIn: 'root'
})
export class SubscriptionService {

  private subscription: Subscription;

  private subscriptions: Sub[] = [];

  geSubscriptions(): Sub[] {
    return this.subscriptions;
  }


  private fapiServerUrl: string = 'http://localhost:8081/api/subscriptions/';

  getSubscriptionsFromFapi() {
    if (this.subscription) this.subscription.unsubscribe();
    this.subscription = this.http.get<Sub[]>(this.fapiServerUrl + this.usersService.getActiveUser().id)
      .subscribe(subscriptions => this.subscriptions = subscriptions);
  }

  subscribeToService(service: Service): Observable<Sub> {
    let sub: Sub = new Sub(null, this.usersService.getActiveUser().id, null, service);
    return this.http.post<Sub>(this.fapiServerUrl, sub);
  }

  continueSubscription(sub: Sub): Observable<Sub> {
    return this.http.put<Sub>(this.fapiServerUrl + sub.id, sub);
  }

  pauseSubscription(sub: Sub): Observable<Sub> {
    return this.http.put<Sub>(this.fapiServerUrl + sub.id, sub);
  }

  deleteSubscription(id: number): Observable<void> {
    return this.http.delete<void>(this.fapiServerUrl + id);
  }

  constructor(private http: HttpClient, private usersService: UsersService) {

  }
}
