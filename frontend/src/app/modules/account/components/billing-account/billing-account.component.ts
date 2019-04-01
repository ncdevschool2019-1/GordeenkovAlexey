import {Component, OnInit} from '@angular/core';
import {UsersService} from "../../../../services/users.service";
import {BillingAccount} from "../../models/billing-account";

@Component({
  selector: 'app-billing-account',
  templateUrl: './billing-account.component.html',
  styleUrls: ['./billing-account.component.css']
})
export class BillingAccountComponent implements OnInit {

  billingAccounts: BillingAccount[];

  getBillingAcconts(): BillingAccount[] {
    this.usersService.getBillingAccounts()
      .subscribe(billingAccounts => this.billingAccounts = billingAccounts);
    return this.billingAccounts;
  }

  constructor(private usersService: UsersService) {
  }

  ngOnInit() {
    this.getBillingAcconts();
  }

}
