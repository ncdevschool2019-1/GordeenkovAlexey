import {Injectable} from '@angular/core';
import {Subscription} from "../modules/account/models/subscription";

import {HttpClient} from "@angular/common/http";
import {Observable, of} from 'rxjs';
import {UsersService} from "./users.service";
import {Service} from "../modules/catalog/models/service";

@Injectable({
  providedIn: 'root'
})
export class SubscriptionService {


  private fapiServerUrl: string = 'http://localhost:8081/api/subscriptions/';

  getSubscriptions(): Observable<Subscription[]> {
    return this.http.get<Subscription[]>(this.fapiServerUrl + this.usersService.getActiveUser().id)
  }

  subscribe(serv: Service): Observable<Subscription> {
    let sub: Subscription = new Subscription(-1, this.usersService.getActiveUser().id, serv.name, serv.cost, "");
    return this.http.post<Subscription>(this.fapiServerUrl + this.usersService.getActiveUser().id, sub);
  }

  constructor(private usersService: UsersService, private http: HttpClient) {

  }

}
