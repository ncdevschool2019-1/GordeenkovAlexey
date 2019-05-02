import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {Ng4LoadingSpinnerModule} from "ng4-loading-spinner";
import {AppRoutingModule} from './/app-routing.module';
import {HeaderModule} from './modules/header/header.module';
import {LayoutModule} from './modules/layout/layout.module';
import {AccountModule} from './modules/account/account.module';
import {CatalogModule} from './modules/catalog/catalog.module';
import {FooterModule} from './modules/footer/footer.module';
import {HomePageModule} from './modules/home-page/home-page.module';
import {ToastrModule} from 'ngx-toastr';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {httpInterceptorProviders} from "./services/interceptor.service";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ToastrModule.forRoot({
      timeOut: 2000,
      positionClass: 'toast-center-center'
    }),
    Ng4LoadingSpinnerModule.forRoot(),
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot(),
    AppRoutingModule,
    HeaderModule,
    LayoutModule,
    AccountModule,
    CatalogModule,
    FooterModule,
    HomePageModule,
    BrowserAnimationsModule
  ],
  providers: [httpInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
