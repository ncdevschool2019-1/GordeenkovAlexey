import {Component, OnDestroy, OnInit, TemplateRef} from '@angular/core';
import {Sub} from "../../models/sub";
import {SubscriptionService} from "../../../../services/subscription.service";
import {Subscription} from "rxjs";
import DateTimeFormat = Intl.DateTimeFormat;
import {absFloor} from "ngx-bootstrap/chronos/utils";
import {AuthorizationService} from "../../../../services/authorization.service";
import {ModalService} from "../../../../services/modal.service";

@Component({
  selector: 'app-subscriptions-table',
  templateUrl: './subscriptions-table.component.html',
  styleUrls: ['./subscriptions-table.component.css']
})
export class SubscriptionsTableComponent implements OnInit, OnDestroy {

  subscriptions: Subscription[] = [];
  clearIntervalInstance: any;
  trend: string = 'up';
  sortBy: string = 'byName';


  constructor(private subscriptionService: SubscriptionService, private authService: AuthorizationService, private modalService: ModalService) {
  }


  public closeModal() {
    this.modalService.closeModal();
  }

  public openModal(template: TemplateRef<any>): void {
    this.modalService.openModal(template);
  }


  sort(sortBy: string) {
    if (sortBy === this.sortBy) {
      if (this.trend === 'up') {
        this.trend = 'down';
      } else {
        this.trend = 'up';
      }
    } else {
      this.trend = 'up';
      this.sortBy = sortBy;
    }
    this.subscriptionService.getSubscriptionsFromFapi(this.sortBy, this.trend);
    clearInterval(this.clearIntervalInstance);
    this.clearIntervalInstance =
      setInterval(() => {
        this.subscriptionService.getSubscriptionsFromFapi(this.sortBy, this.trend);
      }, 1000)
  }


  isUser(): boolean {
    return this.authService.isUser();
  }

  isAdmin(): boolean {
    return this.authService.isAdmin();
  }


  getSubscriptions(): Sub[] {
    return this.subscriptionService.getSubscriptions();
  }

  timeLeft(subscription: Sub): number {
    if (subscription.status.name === "Paused") {
      return absFloor(subscription.expireDate / 1000 - subscription.startDate / 1000);
    } else if (subscription.status.name === "Active") return absFloor(subscription.expireDate / 1000 - Date.now() / 1000);
    return 0;
  }

  ngOnInit() {
    this.clearIntervalInstance =
      setInterval(() => {
        this.subscriptionService.getSubscriptionsFromFapi(this.sortBy, this.trend);
      }, 1000)
  }

  deleteSubscription(id: number) {
    this.subscriptions.push(
      this.subscriptionService.deleteSubscription(id).subscribe(value => {
        this.subscriptionService.getSubscriptionsFromFapi();
        this.closeModal();
      }));
  }

  continueSubscription(sub: Sub) {
    sub.status.id = 1;
    sub.status.name = "Active";
    this.subscriptions.push(
      this.subscriptionService.changeSubscriptionStatus(sub).subscribe(value =>
        this.subscriptionService.getSubscriptionsFromFapi()));
  }

  pauseSubscription(sub: Sub) {
    sub.status.id = 2;
    sub.status.name = "Paused";
    this.subscriptions.push(
      this.subscriptionService.changeSubscriptionStatus(sub).subscribe(value =>
        this.subscriptionService.getSubscriptionsFromFapi()));
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(s => s.unsubscribe());
    clearInterval(this.clearIntervalInstance);
  }

}
