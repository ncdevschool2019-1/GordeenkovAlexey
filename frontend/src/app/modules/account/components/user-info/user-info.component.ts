import {Component, OnInit} from '@angular/core';
import {UsersService} from "../../../../services/users.service";
import {User} from "../../models/user";
import {AuthorizationService} from "../../../../services/authorization.service";

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {

  constructor(private authService: AuthorizationService, private usersService: UsersService) {
  }

  ngOnInit() {
  }

  getUser(): User {
    return this.usersService.getActiveUser();
  }
}
