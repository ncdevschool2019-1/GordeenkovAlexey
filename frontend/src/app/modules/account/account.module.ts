import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {Ng4LoadingSpinnerModule} from 'ng4-loading-spinner';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {AddBillingAccountComponent} from "./components/add-billing-account/add-billing-account.component";
import {BillingAccountComponent} from "./components/billing-account/billing-account.component";
import {SubscriptionsTableComponent} from "./components/subscriptions-table/subscriptions-table.component";
import {UserInfoComponent} from "./components/user-info/user-info.component";
import {UsersListComponent} from "./components/users-list/users-list.component";
import {UsersService} from "../../services/users.service";
import {SubscriptionService} from "../../services/subscription.service";

@NgModule({
  declarations: [
    AddBillingAccountComponent,
    BillingAccountComponent,
    SubscriptionsTableComponent,
    UserInfoComponent,
    UsersListComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    FormsModule,
    HttpClientModule,
    Ng4LoadingSpinnerModule.forRoot(),

  ],

  providers: [UsersService, SubscriptionService],
  exports: [
    AddBillingAccountComponent,
    BillingAccountComponent,
    SubscriptionsTableComponent,
    UserInfoComponent,
    UsersListComponent]
})
export class AccountModule {
}
