import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {PhoneValidator} from "../../../../Validators/phoneValidator";

@Component({
  selector: 'app-sing-up',
  templateUrl: './sing-up.component.html',
  styleUrls: ['./sing-up.component.css']
})
export class SingUpComponent implements OnInit {

  formControls: FormControl[];

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

  constructor() {
  }

  ngOnInit() {

  }

  singUpSubmit() {
    console.log(this.SingUpForm.value);
    ;
  }

}
