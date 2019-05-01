import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ModalService} from "../../../../services/modal.service";

@Component({
  selector: 'app-sing-in-up-pop-up',
  templateUrl: './sing-in-up-pop-up.component.html',
  styleUrls: ['./sing-in-up-pop-up.component.css']
})
export class SingInUpPopUpComponent implements OnInit {

  singIn: boolean;
  singUp: boolean;

  constructor(private modalService: ModalService) {
  }

  closeModal() {
    this.modalService.closeModal();
  }

  ngOnInit() {
    this.singIn = true;
    this.singUp = false;
  }

  singUpClick() {
    this.singUp = true;
    this.singIn = false;
  }

  singInClick() {
    this.singUp = false;
    this.singIn = true;
  }

}
