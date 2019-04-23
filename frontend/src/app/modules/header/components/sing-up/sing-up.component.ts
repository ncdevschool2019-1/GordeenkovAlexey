import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-sing-up',
  templateUrl: './sing-up.component.html',
  styleUrls: ['./sing-up.component.css']
})
export class SingUpComponent implements OnInit {

  formControls: FormControl[];

  SingUpForm: FormGroup = new FormGroup({
    userName: new FormControl("", Validators.required),
    firstName: new FormControl("", Validators.required),
    lastName: new FormControl("", Validators.required),
    phone: new FormControl("", Validators.required),
    password: new FormControl("", Validators.required),
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
