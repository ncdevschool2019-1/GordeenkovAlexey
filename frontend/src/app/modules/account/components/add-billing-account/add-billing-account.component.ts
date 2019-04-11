import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {BillingAccount} from "../../models/billing-account";
import {UsersService} from "../../../../services/users.service";
import {BillingAccountService} from "../../../../services/billing-account.service";
import {BillingAccountComponent} from "../billing-account/billing-account.component";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-add-billing-account',
  templateUrl: './add-billing-account.component.html',
  styleUrls: ['./add-billing-account.component.css']
})
export class AddBillingAccountComponent implements OnInit {

  subscription: Subscription;

  addBillingAccountForm: FormGroup = new FormGroup({
      money: new FormControl("", Validators.required)
    }
  )


  constructor(private billingAccountService: BillingAccountService, private usersService: UsersService) {
  }

  ngOnInit() {
  }


  submit() {
    if (this.subscription) this.subscription.unsubscribe();
    this.subscription =
      this.billingAccountService.addBillingAccount(new BillingAccount(null, this.addBillingAccountForm.get("money").value, this.usersService.getActiveUser().id))
        .subscribe(() => {
          this.billingAccountService.getBillingAccountsFromFapi();
        })
    ;
  }
}
