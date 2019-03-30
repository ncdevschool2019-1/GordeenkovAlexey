import {Component, OnInit} from '@angular/core';
import {categoriesLink} from "../../models/link";
import {LINKS} from "../../models/mock-links";
import {HeaderService} from "../../../../services/header.service";

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  links = LINKS;
  sel: string;

  constructor(private headerService: HeaderService) {
  }

  ngOnInit() {
  }

  onSelect(link: categoriesLink): void {
    this.headerService.setSelectedLink(link);
  }
}
