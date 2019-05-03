import {Component, OnDestroy, OnInit, TemplateRef} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {BillingAccount} from "../../models/billing-account";
import {UsersService} from "../../../../services/users.service";
import {BillingAccountService} from "../../../../services/billing-account.service";
import {Subscription} from "rxjs";
import {BsModalRef, BsModalService} from "ngx-bootstrap";
import {ModalService} from "../../../../services/modal.service";
import {AuthorizationService} from "../../../../services/authorization.service";
import {Ng4LoadingSpinnerService} from "ng4-loading-spinner";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-add-billing-account',
  templateUrl: './add-billing-account.component.html',
  styleUrls: ['./add-billing-account.component.css']
})
export class AddBillingAccountComponent implements OnInit, OnDestroy {

  subscriptions: Subscription[] = [];

  addBillingAccountForm: FormGroup;

  isAuthorized(): boolean {
    return this.authService.getAuthorizedUser() === null ? false : true;
  }

  isUser(): boolean {
    if (!this.isAuthorized()) return false;
    return this.authService.getAuthorizedUser().role.name === "User";
  }

  isAdmin(): boolean {
    if (!this.isAuthorized()) return false;
    return this.authService.getAuthorizedUser().role.name === "Admin";
  }

  constructor(private toastr: ToastrService, private loadingService: Ng4LoadingSpinnerService, private authService: AuthorizationService, private billingAccountService: BillingAccountService, private usersService: UsersService, private modalService: ModalService) {
    this.addBillingAccountForm = new FormGroup({
        'money': new FormControl("", [
          Validators.required,
          Validators.max(999999999),
          Validators.min(0),
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
    console.log("asdasda");
    this.loadingService.show();

    this.subscriptions.push(
      this.billingAccountService.addBillingAccount(new BillingAccount(null, this.addBillingAccountForm.get("money").value, this.usersService.getActiveUser().id))
        .subscribe(() => {
          this.billingAccountService.getBillingAccountsFromFapi();
          this.closeModal();
        }, error => {
          this.loadingService.hide();
          this.toastr.error(error.error.message, 'Error');
        }, () => {
          this.loadingService.hide();
        }));
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(s => s.unsubscribe());
  }
}
