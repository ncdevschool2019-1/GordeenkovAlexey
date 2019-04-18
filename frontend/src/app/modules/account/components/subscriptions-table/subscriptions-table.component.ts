import {Component, OnDestroy, OnInit} from '@angular/core';
import {Sub} from "../../models/sub";
import {SubscriptionService} from "../../../../services/subscription.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-subscriptions-table',
  templateUrl: './subscriptions-table.component.html',
  styleUrls: ['./subscriptions-table.component.css']
})
export class SubscriptionsTableComponent implements OnInit, OnDestroy {

  subscriptions: Subscription[] = [];

  constructor(private subscriptionService: SubscriptionService) {
  }

  getSubscriptions(): Sub[] {
    return this.subscriptionService.geSubscriptions();
  }

  ngOnInit() {
    this.getSubscriptions();
  }

  deleteSubscription(id: number) {
    this.subscriptions.push(
      this.subscriptionService.deleteSubscription(id).subscribe(value =>
        this.subscriptionService.getSubscriptionsFromFapi()));
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(s => s.unsubscribe());
  }

}
