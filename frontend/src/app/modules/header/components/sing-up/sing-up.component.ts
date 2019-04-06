import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-sing-up',
  templateUrl: './sing-up.component.html',
  styleUrls: ['./sing-up.component.css']
})
export class SingUpComponent implements OnInit {

  SingUpForm: FormGroup = new FormGroup({
    "userName": new FormControl("", Validators.required),
    "password": new FormControl("", Validators.required),
    "Email": new FormControl("", [Validators.email, Validators.required])
  });

  constructor() {
  }

  ngOnInit() {
  }

  singUpSubmit() {
    console.log(this.SingUpForm.value);
  }

}
