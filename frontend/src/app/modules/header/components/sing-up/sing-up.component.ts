import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ToastrService} from 'ngx-toastr';
import {Ng4LoadingSpinnerService} from "ng4-loading-spinner";
import {UsersService} from "../../../../services/users.service";
import {RegUser} from "../../models/RegUser";
import {Subscription} from "rxjs";
import {ActivatedRoute} from "@angular/router";
import {ModalService} from "../../../../services/modal.service";

@Component({
  selector: 'app-sing-up',
  templateUrl: './sing-up.component.html',
  styleUrls: ['./sing-up.component.css']
})
export class SingUpComponent implements OnInit, OnDestroy {

  subscriptions: Subscription[] = [];


  SingUpForm: FormGroup = new FormGroup({
    userName: new FormControl("", [
      Validators.required,
      Validators.pattern('^[a-zA-Z][a-zA-Z0-9-_\\.]{1,20}$')
    ]),
    firstName: new FormControl("", [
      Validators.required,
      Validators.pattern('^[a-zA-Zа-яёА-ЯЁ\\s\\-]+$')
    ]),
    lastName: new FormControl("",
      [
        Validators.required,
        Validators.pattern('^[a-zA-Zа-яёА-ЯЁ\\s\\-]+$')
      ]),
    phone: new FormControl("", [
      Validators.required,
      Validators.pattern('^((8|\\+375)[\\- ]?)?(\\(?\\d{3}\\)?[\\- ]?)?[\\d\\- ]{7,10}$')
    ]),
    password: new FormControl("", [
      Validators.required,
      Validators.pattern('(?=^.{8,}$)((?=.*\\d)|(?=.*\\W+))(?![.\\n])(?=.*[A-Z])(?=.*[a-z]).*$')
    ]),
    email: new FormControl("", [Validators.email, Validators.required])
  });

  constructor(private userService: UsersService, private toastr: ToastrService,
              private loadingService: Ng4LoadingSpinnerService, private modalService: ModalService) {
  }

  ngOnInit() {

  }

  test() {
    this.SingUpForm;
  }

  singUpSubmit() {
    this.loadingService.show();

    let user = new RegUser(this.SingUpForm.get("firstName").value, this.SingUpForm.get("lastName").value, this.SingUpForm.get("userName").value, this.SingUpForm.get("email").value, this.SingUpForm.get("phone").value, this.SingUpForm.get("password").value);

    this.subscriptions.push(
      this.userService.saveUser(user).subscribe(value => {
        this.toastr.success('Account created successfully!', user.firstName);
        this.modalService.closeModal();
      }, error => {
        this.toastr.error(error.error, 'Error');
        this.loadingService.hide();
      }, () => this.loadingService.hide()));

  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(value => value.unsubscribe());
  }

}
