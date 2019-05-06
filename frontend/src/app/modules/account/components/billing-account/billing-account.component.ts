import {Component, OnDestroy, OnInit, TemplateRef, ɵViewFlags} from '@angular/core';
import {BillingAccount} from "../../models/billing-account";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {BillingAccountService} from "../../../../services/billing-account.service";
import {Subscription} from "rxjs";
import {BsModalRef, BsModalService} from "ngx-bootstrap";
import {ModalService} from "../../../../services/modal.service";
import {AuthorizationService} from "../../../../services/authorization.service";
import {ToastrService} from "ngx-toastr";
import {Ng4LoadingSpinnerService} from "ng4-loading-spinner";

@Component({
  selector: 'app-billing-account',
  templateUrl: './billing-account.component.html',
  styleUrls: ['./billing-account.component.css']
})
export class BillingAccountComponent implements OnInit, OnDestroy {

  subscriptions: Subscription[] = [];
   addMoneyForms: FormGroup[] = [];
  clearIntervalInstance: any;
  totalBalance: number;
  billingAccounts: BillingAccount[];
  public modalRef: BsModalRef;

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


  public closeModal() {
    this.modalService.closeModal();
  }

  public openModal(template: TemplateRef<any>): void {
    this.modalService.openModal(template);
  }

  addMoney(baId: number, indexOfForm: number) {
    this.loadingService.show();

    let tmpBA = this.billingAccounts[indexOfForm];

    this.subscriptions.push(
      this.billingAccountService.addMoney(new BillingAccount(tmpBA.id, tmpBA.balance + Number(this.addMoneyForms[indexOfForm].get("money").value), tmpBA.userId))
        .subscribe(() => {

          this.getBillingAccounts();
            this.modalService.closeModal();

          }, error => {

            this.loadingService.hide();
            this.toastr.error(error.error.message, 'Error');

          }, () => {

            this.loadingService.hide();

          }
        ))
    ;
  }

  getBillingAccounts() {
    this.subscriptions.push(
      this.billingAccountService.getBillingAccounts().subscribe(value => {
        this.billingAccounts = value;
        if (value.length
          != this.addMoneyForms.length) {
          this.updateForms(value.length);
        }
      })
    );
  }

  updateForms(length: number) {
    this.addMoneyForms = [];
    for (let i = 0; i < length; i++) {
      this.addMoneyForms.push(
        new FormGroup({
          "money": new FormControl("", [
            Validators.required,
            Validators.max(999999999),
            Validators.min(1),
            Validators.pattern('^[0-9]+$')
          ])
        })
      );
    }
  }

  deleteBillingAccount(id: number) {
    this.subscriptions.push(
      this.billingAccountService.deleteBillingAccount(id).subscribe(value => {
          this.getBillingAccounts();
        }
      )
    );
  }

  getTotalBalance() {
    this.subscriptions.push(
      this.billingAccountService.getTotalBalanse().subscribe(value => {
        this.totalBalance = value;
      }));
  }

  constructor(private toastr: ToastrService, private loadingService: Ng4LoadingSpinnerService, private authService: AuthorizationService, private billingAccountService: BillingAccountService, private modalService: ModalService) {
  }

  ngOnInit() {
    this.clearIntervalInstance =
      setInterval(() => {
        if (this.isUser()) {
          this.getBillingAccounts();
        } else {
          if (this.isAdmin()) {
            this.getTotalBalance();
          }
        }
      }, 1000);
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(s => s.unsubscribe());
    clearInterval(this.clearIntervalInstance);
  }
}
