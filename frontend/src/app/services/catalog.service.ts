import {Injectable} from '@angular/core';


import {Observable, of} from 'rxjs';

import {Service} from "../modules/catalog/models/service";
import {HeaderService} from "./header.service";
import {HttpClient} from "@angular/common/http";
import {ActivatedRoute} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class CatalogService {

  getCatalog(): Observable<Service[]> {
    return this.http.get<Service[]>('http://localhost:8081/api/catalog/' + this.headerService.getSelectedLink().name.toLowerCase());
  }


  constructor(private http: HttpClient, private route: ActivatedRoute, private headerService: HeaderService) {
  }
}
