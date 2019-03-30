import {Component, OnInit} from '@angular/core';
import {Link} from "../../models/link";
import {LINKS} from "../../models/mock-links";

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  links = LINKS;

  constructor() {
  }

  ngOnInit() {
  }

}
