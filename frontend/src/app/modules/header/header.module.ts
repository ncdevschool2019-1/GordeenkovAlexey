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
    HttpClientModule,
    Ng4LoadingSpinnerModule.forRoot(),

  ],

  providers: [HeaderService],
  exports: [HeaderComponent, SingInUpPopUpComponent]
})
export class HeaderModule {
}
