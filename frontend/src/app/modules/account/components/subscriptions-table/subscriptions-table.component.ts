import {Component, OnInit} from '@angular/core';
import {Sub} from "../../models/sub";
import {SubscriptionService} from "../../../../services/subscription.service";

@Component({
  selector: 'app-subscriptions-table',
  templateUrl: './subscriptions-table.component.html',
  styleUrls: ['./subscriptions-table.component.css']
})
export class SubscriptionsTableComponent implements OnInit {


  constructor(private subscriptionService: SubscriptionService) {
  }

  getSubscriptions(): Sub[] {
    return this.subscriptionService.geSubscriptions();
  }

  ngOnInit() {
    this.getSubscriptions();
  }

  deleteSubscription(id: number) {
    this.subscriptionService.deleteSubscription(id);
    this.subscriptionService.getSubscriptionsFromFapi();
  }

}
