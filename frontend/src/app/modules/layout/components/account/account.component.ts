import {Component, OnInit} from '@angular/core';
import {UsersService} from "../../../../services/users.service";
import {SubscriptionService} from "../../../../services/subscription.service";

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  constructor(private usersService: UsersService, private subscriptionsService: SubscriptionService) {
  }

  ngOnInit() {
    this.usersService.getUsersFromFapi();
    this.subscriptionsService.getSubscriptionsFromFapi();
  }

}
