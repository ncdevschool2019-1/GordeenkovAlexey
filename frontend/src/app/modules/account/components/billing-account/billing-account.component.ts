import {Component, OnDestroy, OnInit} from '@angular/core';
import {BillingAccount} from "../../models/billing-account";
import {FormControl, FormGroup} from "@angular/forms";
import {BillingAccountService} from "../../../../services/billing-account.service";
import {Subscription} from "rxjs";
import {forEach} from "@angular/router/src/utils/collection";

@Component({
  selector: 'app-billing-account',
  templateUrl: './billing-account.component.html',
  styleUrls: ['./billing-account.component.css']
})
export class BillingAccountComponent implements OnInit, OnDestroy {

  billingAccounts: BillingAccount[];

  subscriptions: Subscription[] = [];

  /* addMoneyForm:FormGroup = new FormGroup({
     "money":new FormControl()
   })

   addMoneyForms: FormGroup[] = [];
 */
  getBillingAccounts(): BillingAccount[] {
    return this.billingAccountService.getBillingAccounts();
  }

  constructor(private billingAccountService: BillingAccountService) {
  }

  ngOnInit() {
    this.billingAccountService.getBillingAccountsFromFapi();
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(s => s.unsubscribe());
  }
}
