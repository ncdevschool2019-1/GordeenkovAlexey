import {Component, OnDestroy, OnInit} from '@angular/core';
import {UsersService} from "../../../../services/users.service";
import {User} from "../../models/user";
import {BillingAccountService} from "../../../../services/billing-account.service";
import {SubscriptionService} from "../../../../services/subscription.service";
import {AuthorizationService} from "../../../../services/authorization.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit, OnDestroy {

  users: User[];
  subscriptions: Subscription[] = [];
  ready = false;

  isUser(): boolean {
    return this.authService.isUser();
  }

  isAdmin(): boolean {
    return this.authService.isAdmin()
  }

  constructor(private authService: AuthorizationService, private usersService: UsersService, private billingAccount: BillingAccountService, private subscriptionService: SubscriptionService) {
  }

  getUsers() {
    if (this.isAdmin()) {
      this.subscriptions.push(
        this.usersService.getUsers().subscribe(value => {
          this.users = value.filter(value => value.role.name === "User");
          if (this.usersService.getActiveUser() === undefined) {
            this.usersService.setActiveUser(this.users[0]);
          }
        })
      );
    }
  }

  getActiveUser(): User {
    return this.usersService.getActiveUser();
  }

  onSelect(user: User) {
    this.usersService.setActiveUser(user);
    this.subscriptionService.getSubscriptionsFromFapi();
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(s => s.unsubscribe());
  }

  ngOnInit(): void {
    this.subscriptions.push(
      this.authService.getUserAuthorizedSubject().subscribe(value => {
        this.getUsers();
        this.ready = value;
      }));


  }
}
