import {Injectable} from '@angular/core';
import {Observable, of, Subscription} from "rxjs";
import {BillingAccount} from "../modules/account/models/billing-account";
import {HttpClient} from "@angular/common/http";
import {UsersService} from "./users.service";

@Injectable({
  providedIn: 'root'
})
export class BillingAccountService {


  billingAccounts: BillingAccount[];

  subscription: Subscription;

  constructor(private http: HttpClient, private userService: UsersService) {
  }

  getBillingAccountsFromFapi() {
    if (this.subscription) this.subscription.unsubscribe();
    this.subscription =
      this.http.get<BillingAccount[]>('http://localhost:8081/api/billing-accounts/' + this.userService.getActiveUser().id)
        .subscribe(billingAccounts => this.billingAccounts = billingAccounts);
  }

  add(account: BillingAccount): Observable<BillingAccount> {
    return this.http.post<BillingAccount>('http://localhost:8081/api/billing-accounts/' + this.userService.getActiveUser().id, account);
  }

  getBillingAccounts(): BillingAccount[] {
    return this.billingAccounts;
  }

}



