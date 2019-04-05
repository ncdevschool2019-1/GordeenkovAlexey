import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-sing-in-up-pop-up',
  templateUrl: './sing-in-up-pop-up.component.html',
  styleUrls: ['./sing-in-up-pop-up.component.css']
})
export class SingInUpPopUpComponent implements OnInit {

  logInForm: FormGroup = new FormGroup({
    "userName": new FormControl("", Validators.required),
    "password": new FormControl("", Validators.required),
  });

  constructor() {
  }

  ngOnInit() {
  }

  loginSubmit() {
    console.log(this.logInForm.value);
  }
}
