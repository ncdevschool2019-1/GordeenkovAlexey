import {Injectable} from '@angular/core';


import {Observable, of} from 'rxjs';

import {Service} from "../modules/catalog/models/service";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CatalogService {

  getCatalog(): Observable<Service[]> {
    return this.http.get<Service[]>('http://localhost:8081/api/catalog' + document.location.pathname);
  }

  update() {
    this.getCatalog();
  }

  constructor(private http: HttpClient) {
  }
}
