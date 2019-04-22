import {Component, OnDestroy, OnInit} from '@angular/core';
import {Sub} from "../../models/sub";
import {SubscriptionService} from "../../../../services/subscription.service";
import {Subscription} from "rxjs";
import DateTimeFormat = Intl.DateTimeFormat;
import {absFloor} from "ngx-bootstrap/chronos/utils";

@Component({
  selector: 'app-subscriptions-table',
  templateUrl: './subscriptions-table.component.html',
  styleUrls: ['./subscriptions-table.component.css']
})
export class SubscriptionsTableComponent implements OnInit, OnDestroy {

  subscriptions: Subscription[] = [];
  clearIntervalInstance: any;

  constructor(private subscriptionService: SubscriptionService) {
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
    this.getSubscriptions();
    this.clearIntervalInstance =
      setInterval(() => {
        this.subscriptionService.getSubscriptionsFromFapi();
      }, 1000)
  }

  deleteSubscription(id: number) {
    this.subscriptions.push(
      this.subscriptionService.deleteSubscription(id).subscribe(value =>
        this.subscriptionService.getSubscriptionsFromFapi()));
  }

  continueSubscription(sub: Sub) {
    sub.status.id = 1;
    sub.status.name = "Active";
    this.subscriptions.push(
      this.subscriptionService.continueSubscription(sub).subscribe(value =>
        this.subscriptionService.getSubscriptionsFromFapi()));
  }

  pauseSubscription(sub: Sub) {
    sub.status.id = 2;
    sub.status.name = "Paused";
    this.subscriptions.push(
      this.subscriptionService.pauseSubscription(sub).subscribe(value =>
        this.subscriptionService.getSubscriptionsFromFapi()));
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(s => s.unsubscribe());
    clearInterval(this.clearIntervalInstance);
  }

}
