import {Injectable} from '@angular/core';
import {Observable, of, Subscription} from "rxjs";
import {BillingAccount} from "../modules/account/models/billing-account";
import {HttpClient} from "@angular/common/http";
import {UsersService} from "./users.service";

@Injectable({
  providedIn: 'root'
})
export class BillingAccountService {

  private fapiServerUrl: string = 'http://localhost:8081/api/billing-accounts/';

  billingAccounts: BillingAccount[] = [];

  subscription: Subscription;

  constructor(private http: HttpClient, private userService: UsersService) {
  }

  getBillingAccountsFromFapi() {
    if (this.subscription) this.subscription.unsubscribe();
    this.subscription =
      this.http.get<BillingAccount[]>(this.fapiServerUrl + this.userService.getActiveUser().id)
        .subscribe(billingAccounts => this.billingAccounts = billingAccounts);
  }

  addBillingAccount(account: BillingAccount): Observable<BillingAccount> {
    return this.http.post<BillingAccount>(this.fapiServerUrl, account);
  }

  addMoney(account: BillingAccount): Observable<BillingAccount> {
    return this.http.put<BillingAccount>(this.fapiServerUrl + account.id, account);
  }

  deleteBillingAccount(id: number) {
    this.http.delete(this.fapiServerUrl + id);
  }

  getBillingAccounts(): BillingAccount[] {
    return this.billingAccounts;
  }

}



