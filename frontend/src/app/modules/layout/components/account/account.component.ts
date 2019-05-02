import {Component, OnInit} from '@angular/core';
import {UsersService} from "../../../../services/users.service";
import {SubscriptionService} from "../../../../services/subscription.service";
import {AuthorizationService} from "../../../../services/authorization.service";

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  constructor(private usersService: UsersService, private subscriptionsService: SubscriptionService, private authService: AuthorizationService) {
  }

  ngOnInit() {
    this.usersService.getUsersFromFapi();
    this.subscriptionsService.getSubscriptionsFromFapi();
  }

  isAuthorized(): boolean {
    return this.authService.getAuthorizedUser() === null ? false : true;
  }
}
