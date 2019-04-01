import {Injectable} from '@angular/core';


import {Observable, of} from 'rxjs';

import {Service} from "../modules/catalog/models/service";
import {CATALOG} from "../modules/catalog/models/mock-catalog";
import {HeaderService} from "./header.service";
import {BILLINGACCOUNTS} from "../modules/account/models/mock-billing-accounts";

@Injectable({
  providedIn: 'root'
})
export class CatalogService {

  getCatalog(): Observable<Service[]> {
    return of(CATALOG.filter(serv => serv.type === this.headerService.getSelectedLink().name));
  }

  constructor(private headerService: HeaderService) {
  }
}
