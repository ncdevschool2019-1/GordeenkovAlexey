import {Component, OnInit} from '@angular/core';
import {UsersService} from "../../../../services/users.service";
import {User} from "../../models/user";
import {BillingAccountService} from "../../../../services/billing-account.service";

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {

  users: User[];

  constructor(private usersService: UsersService, private billingAccount: BillingAccountService) {
  }

  ngOnInit() {
    this.getUsers();
  }

  getUsers() {
    this.usersService.getUsers()
      .subscribe(users => this.users = users);
  }

  getActiveUser(): User {
    if (this.usersService.getActiveUser() != undefined) {
      return this.usersService.getActiveUser();
    } else {
      this.usersService.setActiveUser(this.users[0]);
      return this.users[0];
    }

  }

  onSelect(user: User) {
    this.usersService.setActiveUser(user);
    this.billingAccount.getBillingAccountsFromFapi();
  }
}
