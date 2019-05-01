import {Component, OnInit, TemplateRef} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {BillingAccount} from "../../models/billing-account";
import {UsersService} from "../../../../services/users.service";
import {BillingAccountService} from "../../../../services/billing-account.service";
import {Subscription} from "rxjs";
import {BsModalRef, BsModalService} from "ngx-bootstrap";
import {ModalService} from "../../../../services/modal.service";

@Component({
  selector: 'app-add-billing-account',
  templateUrl: './add-billing-account.component.html',
  styleUrls: ['./add-billing-account.component.css']
})
export class AddBillingAccountComponent implements OnInit {

  subscription: Subscription;

  addBillingAccountForm: FormGroup;


  constructor(private billingAccountService: BillingAccountService, private usersService: UsersService, private modalService: ModalService) {
    this.addBillingAccountForm = new FormGroup({
        'money': new FormControl("", [
          Validators.required,
          Validators.max(999999999),
          Validators.pattern('^[0-9]+$')
        ])
      }
    )
  }

  get money() {
    return this.addBillingAccountForm.get('money');
  }
  ngOnInit() {
  }

  public closeModal() {
    this.modalService.closeModal();
  }

  public openModal(template: TemplateRef<any>): void {
    this.modalService.openModal(template);
  }

  submit() {
    if (this.subscription) this.subscription.unsubscribe();
    this.subscription =
      this.billingAccountService.addBillingAccount(new BillingAccount(null, this.addBillingAccountForm.get("money").value, this.usersService.getActiveUser().id))
        .subscribe(() => {
          this.billingAccountService.getBillingAccountsFromFapi();
          this.closeModal();
        })
    ;
  }
}
