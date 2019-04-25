import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {Ng4LoadingSpinnerModule} from 'ng4-loading-spinner';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {CatalogComponent} from "./components/catalog/catalog.component";
import {CatalogService} from "../../services/catalog.service";
import {SubscriptionService} from "../../services/subscription.service";
import {HeaderService} from "../../services/header.service";
import {BillingAccountService} from "../../services/billing-account.service";

@NgModule({
  declarations: [
    CatalogComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    FormsModule,
    HttpClientModule,
    Ng4LoadingSpinnerModule.forRoot(),

  ],

  providers: [CatalogService, SubscriptionService, HeaderService, BillingAccountService],
  exports: [CatalogComponent]
})
export class CatalogModule {
}
