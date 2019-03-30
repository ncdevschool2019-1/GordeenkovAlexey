import {Injectable} from '@angular/core';
import {Link} from "../modules/header/models/link";
import {LINKS} from "../modules/header/models/mock-links";

@Injectable({
  providedIn: 'root'
})
export class HeaderService {

  private selectedLink: Link;

  constructor() {
    this.selectedLink = this.getLinks()[0];
  }

  getLinks(): Link[] {
    return LINKS;
  }

  getSelectedLink(): Link {
    return this.selectedLink;
  }

  setSelectedLink(link: Link) {
    this.selectedLink = link;
  }
}
