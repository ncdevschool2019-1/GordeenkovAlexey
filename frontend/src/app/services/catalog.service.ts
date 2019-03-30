import {Injectable} from '@angular/core';


import {Observable, of} from 'rxjs';

import {Service} from "../modules/catalog/models/service";
import {CATALOG} from "../modules/catalog/models/mock-catalog";

@Injectable({
  providedIn: 'root'
})
export class CatalogService {

  getCatalog(): Observable<Service[]> {
    return of(CATALOG);
  }

  constructor() {
  }
}
