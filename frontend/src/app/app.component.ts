import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subject, Subscription} from "rxjs";
import {TokenService} from "./services/token.service";
import {AuthorizationService} from "./services/authorization.service";
import {UsersService} from "./services/users.service";
import {delay} from "rxjs/operators";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'etalon';

  subscriptions: Subscription[] = [];

  constructor(private tokenService: TokenService, private authService: AuthorizationService, private userService: UsersService) {
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(s => s.unsubscribe());
  }

  ngOnInit(): void {
    if (this.tokenService.getLogin() != null) {
      this.subscriptions.push(
        this.userService.getUserByUsername(this.tokenService.getLogin()).subscribe(value => {
          if (value != null) {
            this.authService.setAuthorizedUser(value);
          }
          this.authService.setReady();
        })
      );
    } else {
      this.authService.setReady();
    }

  }

}
