import {Injectable} from '@angular/core';


import {Observable, of} from 'rxjs';

import {Service} from "../modules/catalog/models/service";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CatalogService {

  getCatalog(type: string): Observable<Service[]> {
    return this.http.get<Service[]>('http://localhost:8081/api/catalog/' + type);
  }


  constructor(private http: HttpClient) {
  }
}
