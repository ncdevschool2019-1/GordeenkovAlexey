import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {Ng4LoadingSpinnerModule} from 'ng4-loading-spinner';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {HeaderComponent} from "./components/header/header.component";
import {SingInUpPopUpComponent} from "./components/sing-in-up-pop-up/sing-in-up-pop-up.component";
import {HeaderService} from "../../services/header.service";
import {SingUpComponent} from './components/sing-up/sing-up.component';
import {SingInComponent} from "./components/sing-in/sing-in.component";
import {ToastrModule} from "ngx-toastr";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {AuthorizationService} from "../../services/authorization.service";
import {ModalService} from "../../services/modal.service";
@NgModule({
  declarations: [
    HeaderComponent,
    SingInUpPopUpComponent,
    SingInComponent,
    SingUpComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot({
      timeOut: 4000,
      positionClass: 'toast-top-center'
    }),
    BrowserAnimationsModule,
    HttpClientModule,
    Ng4LoadingSpinnerModule.forRoot(),

  ],

  providers: [HeaderService, AuthorizationService, ModalService],
  exports: [HeaderComponent, SingInUpPopUpComponent]
})
export class HeaderModule {
}
