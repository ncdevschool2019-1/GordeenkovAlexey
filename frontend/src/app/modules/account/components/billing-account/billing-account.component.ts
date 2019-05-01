import {Component, OnDestroy, OnInit, TemplateRef} from '@angular/core';
import {BillingAccount} from "../../models/billing-account";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {BillingAccountService} from "../../../../services/billing-account.service";
import {Subscription} from "rxjs";
import {BsModalRef, BsModalService} from "ngx-bootstrap";
import {ModalService} from "../../../../services/modal.service";

@Component({
  selector: 'app-billing-account',
  templateUrl: './billing-account.component.html',
  styleUrls: ['./billing-account.component.css']
})
export class BillingAccountComponent implements OnInit, OnDestroy {

  subscriptions: Subscription[] = [];
   addMoneyForms: FormGroup[] = [];
  clearIntervalInstance: any;

  public modalRef: BsModalRef;

  public closeModal() {
    this.modalService.closeModal();
  }

  public openModal(template: TemplateRef<any>): void {
    this.modalService.openModal(template);
  }

  addMoney(baId: number, indexOfForm: number) {
    let tmpBA = this.getBillingAccounts()[indexOfForm];
    this.subscriptions.push(
      this.billingAccountService.addMoney(new BillingAccount(tmpBA.id, tmpBA.balance + Number(this.addMoneyForms[indexOfForm].get("money").value), tmpBA.userId))
        .subscribe(() => {
          this.billingAccountService.getBillingAccountsFromFapi();
        }))
    ;
  }

  getBillingAccounts(): BillingAccount[] {
    let acc = this.billingAccountService.getBillingAccounts();
    if (acc.length
      != this.addMoneyForms.length) {
      this.updateForms(acc.length);
      console.log(acc.length);
    }
    return acc;
  }

  updateForms(length: number) {
    this.addMoneyForms = [];
    for (let i = 0; i < length; i++) {
      this.addMoneyForms.push(
        new FormGroup({
          "money": new FormControl("", [
            Validators.required,
            Validators.max(999999999),
            Validators.pattern('^[0-9]+$')
          ])
        })
      );
    }
  }

  deleteBillingAccount(id: number) {
    this.subscriptions.push(
      this.billingAccountService.deleteBillingAccount(id).subscribe(value =>
        this.billingAccountService.getBillingAccountsFromFapi()));
  }

  constructor(private billingAccountService: BillingAccountService, private modalService: ModalService) {
  }

  ngOnInit() {
    this.clearIntervalInstance =
      setInterval(() => {
        this.billingAccountService.getBillingAccountsFromFapi();
      }, 2000);
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(s => s.unsubscribe());
    clearInterval(this.clearIntervalInstance);
  }
}
