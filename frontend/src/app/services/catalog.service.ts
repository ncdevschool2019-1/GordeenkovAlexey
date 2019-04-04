import {Injectable} from '@angular/core';


import {Observable, of} from 'rxjs';

import {Service} from "../modules/catalog/models/service";
import {HeaderService} from "./header.service";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CatalogService {

  getCatalog(): Observable<Service[]> {
    return this.http.get<Service[]>('http://localhost:8081/api/cat/' + this.headerService.getSelectedLink().name.toLowerCase());
  }

  constructor(private http: HttpClient, private headerService: HeaderService) {
  }
}
