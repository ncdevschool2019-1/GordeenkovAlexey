import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {Ng4LoadingSpinnerModule} from 'ng4-loading-spinner';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {HeaderComponent} from "./components/header/header.component";
import {SingInUpPopUpComponent} from "./components/sing-in-up-pop-up/sing-in-up-pop-up.component";
import {HeaderService} from "../../services/header.service";

@NgModule({
  declarations: [
    HeaderComponent,
    SingInUpPopUpComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    FormsModule,
    HttpClientModule,
    Ng4LoadingSpinnerModule.forRoot(),

  ],

  providers: [HeaderService],
  exports: [HeaderComponent, SingInUpPopUpComponent]
})
export class HeaderModule {
}
