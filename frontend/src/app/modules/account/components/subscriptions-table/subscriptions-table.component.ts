import {Component, OnInit} from '@angular/core';
import {Subscription} from "../../models/subscription";
import {SubscriptionService} from "../../../../services/subscription.service";

@Component({
  selector: 'app-subscriptions-table',
  templateUrl: './subscriptions-table.component.html',
  styleUrls: ['./subscriptions-table.component.css']
})
export class SubscriptionsTableComponent implements OnInit {

  subscriptions: Subscription[];

  constructor(private subscriptionService: SubscriptionService) {
  }

  getSubscriptions(): Subscription[] {

    this.subscriptionService.getSubscriptions()
      .subscribe(subscriptions => this.subscriptions = subscriptions);
    return this.subscriptions;
  }

  ngOnInit() {
    this.getSubscriptions();
  }

}
