import {Component, OnInit, TemplateRef} from '@angular/core';
import {Link} from "../../models/link";
import {HeaderService} from "../../../../services/header.service";
import {ModalService} from "../../../../services/modal.service";
import {AuthorizationService} from "../../../../services/authorization.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  links: Link[];

  isAuthorized(): boolean {
    return this.authService.isAuthorized();
  }


  signOut() {
    this.authService.leaveAccount();
  }

  constructor(private headerService: HeaderService, private modalService: ModalService, private authService: AuthorizationService) {
  }


  public openModal(template: TemplateRef<any>): void {
    this.modalService.openModal(template);
  }

  public closeModal() {
    this.modalService.closeModal();
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
