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

  constructor(private http: HttpClient, private userService: UsersService) {
  }

  getBillingAccounts(): Observable<BillingAccount[]> {
    return this.http.get<BillingAccount[]>(this.fapiServerUrl + this.userService.getActiveUser().id);
  }

  addBillingAccount(account: BillingAccount): Observable<BillingAccount> {
    return this.http.post<BillingAccount>(this.fapiServerUrl, account);
  }

  addMoney(account: BillingAccount): Observable<BillingAccount> {
    return this.http.put<BillingAccount>(this.fapiServerUrl + account.id, account);
  }

  deleteBillingAccount(id: number): Observable<void> {
    return this.http.delete<void>(this.fapiServerUrl + id);
  }


  getTotalBalanse(): Observable<number> {
    return this.http.get<number>(this.fapiServerUrl + "balance/" + this.userService.getActiveUser().id);
  }

}



