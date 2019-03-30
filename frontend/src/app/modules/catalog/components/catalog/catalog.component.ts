import {Component, OnInit} from '@angular/core';
import {CatalogService} from "../../../../services/catalog.service";
import {Service} from "../../models/service";
import {HeaderService} from "../../../../services/header.service";

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit {

  catalog: Service[];

  constructor(private catalogService: CatalogService, private headerService: HeaderService) {
  }

  ngOnInit() {
    this.getCatalog();
  }

  getCatalog() {
    this.catalogService.getCatalog()
      .subscribe(catalog => this.catalog = catalog);
  }

  getSelectedLink(): string {
    return this.headerService.getSelectedLink().name;
  }

}
