import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-sing-in',
  templateUrl: './sing-in.component.html',
  styleUrls: ['./sing-in.component.css']
})
export class SingInComponent implements OnInit {

  logInForm: FormGroup = new FormGroup({
    userName: new FormControl("", [
      Validators.required
    ]),
    password: new FormControl("", [
      Validators.required,
      Validators.pattern('(?=^.{8,}$)((?=.*\\d)|(?=.*\\W+))(?![.\\n])(?=.*[A-Z])(?=.*[a-z]).*$')
    ]),
  });


  constructor() {
  }

  ngOnInit() {
  }

  loginSubmit() {
    console.log(this.logInForm.value);
  }

}
