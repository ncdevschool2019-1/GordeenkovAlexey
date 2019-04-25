import {Component, OnInit, TemplateRef} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {BillingAccount} from "../../models/billing-account";
import {UsersService} from "../../../../services/users.service";
import {BillingAccountService} from "../../../../services/billing-account.service";
import {BillingAccountComponent} from "../billing-account/billing-account.component";
import {Subscription} from "rxjs";
import {BsModalRef, BsModalService} from "ngx-bootstrap";

@Component({
  selector: 'app-add-billing-account',
  templateUrl: './add-billing-account.component.html',
  styleUrls: ['./add-billing-account.component.css']
})
export class AddBillingAccountComponent implements OnInit {

  subscription: Subscription;

  addBillingAccountForm: FormGroup;


  constructor(private billingAccountService: BillingAccountService, private usersService: UsersService, private modalService: BsModalService) {
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

  public modalRef: BsModalRef;

  public closeModal() {
    this.modalRef.hide();
  }

  public openModal(template: TemplateRef<any>): void {

    this.modalRef = this.modalService.show(template); // and when the user clicks on the button to open the popup
                                                      // we keep the modal reference and pass the template local name to the modalService.
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
