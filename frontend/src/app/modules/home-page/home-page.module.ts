import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {Ng4LoadingSpinnerModule} from 'ng4-loading-spinner';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {CategoriesComponent} from "./components/categories/categories.component";
import {ContentComponent} from "./components/content/content.component";
import {CatalogService} from "../../services/catalog.service";
import {CatalogComponent} from "../catalog/components/catalog/catalog.component";

@NgModule({
  declarations: [
    CategoriesComponent,
    ContentComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    FormsModule,
    HttpClientModule,
    Ng4LoadingSpinnerModule.forRoot(),

  ],

  providers: [],
  exports: [ContentComponent, CategoriesComponent]
})
export class HomePageModule {
}
