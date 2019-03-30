import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';
import { FormsModule }   from '@angular/forms';

import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {Ng4LoadingSpinnerModule} from "ng4-loading-spinner";
import {HeaderComponent} from './modules/header/components/header/header.component';
import {SingInUpPopUpComponent} from './modules/header/components/sing-in-up-pop-up/sing-in-up-pop-up.component';
import {CategoriesComponent} from './modules/home-page/components/categories/categories.component';
import {ContentComponent} from './modules/home-page/components/content/content.component';
import {FooterComponent} from './modules/footer/components/footer/footer.component';
import {CatalogComponent} from './modules/catalog/components/catalog/catalog.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SingInUpPopUpComponent,
    CategoriesComponent,
    ContentComponent,
    FooterComponent,
    CatalogComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    Ng4LoadingSpinnerModule.forRoot(),
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
