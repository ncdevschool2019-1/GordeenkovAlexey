import {Component, OnInit} from '@angular/core';
import {UsersService} from "../../../../services/users.service";
import {User} from "../../models/user";
import {BillingAccountService} from "../../../../services/billing-account.service";
import {SubscriptionService} from "../../../../services/subscription.service";
import {AuthorizationService} from "../../../../services/authorization.service";

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {

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

  constructor(private authService: AuthorizationService, private usersService: UsersService, private billingAccount: BillingAccountService, private subscriptionService: SubscriptionService) {
  }

  ngOnInit() {
  }

  getUsers(): User[] {
    if (!this.isAdmin()) return null;
    return this.usersService.getUsers().filter(value => value.role.name === "User");
  }

  getActiveUser(): User {
    return this.usersService.getActiveUser();
  }

  onSelect(user: User) {
    this.usersService.setActiveUser(user);
    this.billingAccount.getBillingAccountsFromFapi();
    this.subscriptionService.getSubscriptionsFromFapi();
  }
}
