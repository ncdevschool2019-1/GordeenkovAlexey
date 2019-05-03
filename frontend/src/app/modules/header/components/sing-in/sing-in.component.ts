import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {UsersService} from "../../../../services/users.service";
import {ToastrService} from "ngx-toastr";
import {Ng4LoadingSpinnerService} from "ng4-loading-spinner";
import {ModalService} from "../../../../services/modal.service";
import {LogUser} from "../../models/LogUser";
import {Subscription} from "rxjs";
import {AuthorizationService} from "../../../../services/authorization.service";
import {TokenService} from "../../../../services/token.service";

@Component({
  selector: 'app-sing-in',
  templateUrl: './sing-in.component.html',
  styleUrls: ['./sing-in.component.css']
})
export class SingInComponent implements OnInit, OnDestroy {

  subscriptions: Subscription[] = [];

  logInForm: FormGroup = new FormGroup({
    userName: new FormControl("", [
      Validators.required,
      Validators.maxLength(20)
    ]),
    password: new FormControl("", [
      Validators.required,
      Validators.pattern('(?=^.{8,}$)((?=.*\\d)|(?=.*\\W+))(?![.\\n])(?=.*[A-Z])(?=.*[a-z]).*$'),
      Validators.maxLength(20)
    ]),
  });


  constructor(private userService: UsersService, private toastr: ToastrService,
              private loadingService: Ng4LoadingSpinnerService, private modalService: ModalService,
              private authService: AuthorizationService, private tokenService: TokenService) {
  }

  ngOnInit() {
  }

  loginSubmit() {
    let user = new LogUser(this.logInForm.get("userName").value, this.logInForm.get("password").value);

    this.loadingService.show();

    console.log(this.authService.getAuthorizedUser());
    this.subscriptions.push(this.authService.attemptAuthorize(user).subscribe(value => {
      this.tokenService.saveAuthorizationToken(value);
      this.toastr.success('You have entered successfully!', value.login);
      this.modalService.closeModal();
    }, error => {
      this.loadingService.hide();
      this.toastr.error(error.error.message, 'Error');
      console.log(error);
    }, () => {
      console.log("Complete");
      this.subscriptions.push(this.userService.getUserByUsername(this.tokenService.getLogin()).subscribe(user => {
        this.authService.setAuthorizedUser(user);
        this.loadingService.hide();
      }));
    }));

  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(value => value.unsubscribe());
  }


}
