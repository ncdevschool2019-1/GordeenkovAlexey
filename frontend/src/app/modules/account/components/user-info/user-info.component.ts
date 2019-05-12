import {Component, OnDestroy, OnInit} from '@angular/core';
import {UsersService} from "../../../../services/users.service";
import {User} from "../../models/user";
import {AuthorizationService} from "../../../../services/authorization.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit, OnDestroy {

  ready = false;
  subscriptions: Subscription[] = [];

  constructor(private authService: AuthorizationService, private usersService: UsersService) {
  }

  ngOnInit() {
    this.subscriptions.push(
      this.authService.getSubject().subscribe(value => {
        this.ready = value;
      })
    );
  }

  getUser(): User {
    return this.usersService.getActiveUser();
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(s => s.unsubscribe());
  }
}
