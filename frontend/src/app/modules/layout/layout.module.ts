import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {AccountModule} from "../account/account.module";
import {CatalogModule} from "../catalog/catalog.module";
import {FooterModule} from "../footer/footer.module";
import {HeaderModule} from "../header/header.module";
import {HomePageModule} from "../home-page/home-page.module";
import {HomeComponent} from './components/home/home.component';
import {NotFoundComponent} from './components/not-found/not-found.component';
import {AccountComponent} from './components/account/account.component';
import {CatalogViewComponent} from './components/catalog-view/catalog-view.component';

@NgModule({
  declarations: [
    HomeComponent,
    NotFoundComponent,
    AccountComponent,
    CatalogViewComponent],
  imports: [
    AccountModule,
    CatalogModule,
    FooterModule,
    HeaderModule,
    HomePageModule,
    RouterModule
  ],
  providers: [],
  exports: [HomeComponent, NotFoundComponent, AccountComponent, CatalogViewComponent]
})
export class LayoutModule {
}
