import {Component, OnDestroy, OnInit, TemplateRef} from '@angular/core';
import {CatalogService} from "../../../../services/catalog.service";
import {Service} from "../../models/service";
import {HeaderService} from "../../../../services/header.service";
import {Subscription} from "rxjs";
import {SubscriptionService} from "../../../../services/subscription.service";
import {BillingAccountService} from "../../../../services/billing-account.service";
import {BsModalRef, BsModalService} from "ngx-bootstrap";

let template: '<p>asdas</p>';
@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit, OnDestroy {

  public catalog: Service[];
  private subscriptions: Subscription[] = [];
  public modalRef: BsModalRef;


  public onSelect(name: string) {
    this.closeModal();
    this.headerService.setSelectedLinkByName(name);
  }

  public closeModal() {
    this.modalRef.hide();
  }

  public openModal(template: TemplateRef<any>): void {

    this.modalRef = this.modalService.show(template); // and when the user clicks on the button to open the popup
                                                      // we keep the modal reference and pass the template local name to the modalService.
  }

  constructor(private catalogService: CatalogService, private headerService: HeaderService,
              private subscriptionsService: SubscriptionService, private billingAccountService: BillingAccountService,
              private modalService: BsModalService) {
  }

  ngOnInit() {
    this.getCatalog();
    this.subscriptionsService.getSubscriptionsFromFapi();
  }

  getCatalog() {
    this.subscriptions.push(this.catalogService.getCatalog(this.headerService.getSelectedLink().name)
      .subscribe(catalog => {
        this.catalog = catalog
        }
      ));

  }

  subscribeToService(service: Service, template: TemplateRef<any>) {

    this.subscriptions.push
    (this.billingAccountService.getTotalBalanse().subscribe(value => {
      if (service.cost > value) {
        this.openModal(template);
      } else {


        this.subscriptions.push(
          this.subscriptionsService.subscribeToService(service).subscribe(value => {
            this.subscriptionsService.getSubscriptionsFromFapi();
            setTimeout(() => {
              this.getCatalog();
            }, 1000);
          }));
      }
    }));
  }

  isThereSubscriptionToService(sevice: Service): boolean {
    return this.subscriptionsService.isThereSubscriptionToService(sevice);
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(s => s.unsubscribe());
  }
}
