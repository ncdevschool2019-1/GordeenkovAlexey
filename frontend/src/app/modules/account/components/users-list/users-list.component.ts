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



  constructor(private usersService: UsersService, private billingAccount: BillingAccountService) {
  }

  ngOnInit() {
  }

  getUsers(): User[] {
    return this.usersService.getUsers();
  }

  getActiveUser(): User {
    return this.usersService.getActiveUser();
  }

  onSelect(user: User) {
    this.usersService.setActiveUser(user);
    this.billingAccount.getBillingAccountsFromFapi();
  }
}
