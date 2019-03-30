import {Component, OnInit} from '@angular/core';
import {Link} from "../../models/link";
import {HeaderService} from "../../../../services/header.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  links: Link[];

  constructor(private headerService: HeaderService) {
  }

  ngOnInit() {
    this.getLinks();
  }

  getLinks() {
    this.links = this.headerService.getLinks();
  }

  onSelect(link: Link): void {
    this.headerService.setSelectedLink(link);
  }

  getSelectedLink(): Link {
    return this.headerService.getSelectedLink();
  }

}
