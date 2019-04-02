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
import {BillingAccountComponent} from './modules/account/components/billing-account/billing-account.component';
import {UserInfoComponent} from './modules/account/components/user-info/user-info.component';
import {SubscriptionsTableComponent} from './modules/account/components/subscriptions-table/subscriptions-table.component';
import {UsersListComponent} from "./modules/account/components/users-list/users-list.component";
import {AddBillingAccountComponent} from './modules/account/components/add-billing-account/add-billing-account.component';
import {AppRoutingModule} from './/app-routing.module';
import {HeaderModule} from './modules/header/header.module';
import {LayoutModule} from './modules/layout/layout.module';
import {AccountModule} from './modules/account/account.module';
import {CatalogModule} from './modules/catalog/catalog.module';
import {FooterModule} from './modules/footer/footer.module';
import {HomePageModule} from './modules/home-page/home-page.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
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
    HomePageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
