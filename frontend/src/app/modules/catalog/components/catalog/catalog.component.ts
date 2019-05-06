import {Component, OnDestroy, OnInit, TemplateRef} from '@angular/core';
import {CatalogService} from "../../../../services/catalog.service";
import {Service} from "../../models/service";
import {HeaderService} from "../../../../services/header.service";
import {Observable, Subscription} from "rxjs";
import {SubscriptionService} from "../../../../services/subscription.service";
import {BillingAccountService} from "../../../../services/billing-account.service";
import {ModalService} from "../../../../services/modal.service";
import {AuthorizationService} from "../../../../services/authorization.service";
import {Ng4LoadingSpinnerService} from "ng4-loading-spinner";

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit, OnDestroy {

  public catalog: Service[];
  private subscriptions: Subscription[] = [];

  asyncCatalog: Observable<Service[]>;
  p: number = 1;
  total: number;


  getPage(page: number) {
    this.loadingService.show();
    this.asyncCatalog = this.catalogService.getPage(this.headerService.getSelectedLink().name, page)
    this.subscriptions.push(
      this.asyncCatalog.subscribe(value => {
        this.loadingService.hide();
        this.p = page;
      })
    );
  }


  constructor(private loadingService: Ng4LoadingSpinnerService, private catalogService: CatalogService, private headerService: HeaderService,
              private subscriptionsService: SubscriptionService, private billingAccountService: BillingAccountService,
              private modalService: ModalService, private authService: AuthorizationService) {
  }


  isAuthorized(): boolean {
    return this.authService.getAuthorizedUser() === null ? false : true;
  }

  isUser(): boolean {
    if (!this.isAuthorized()) return false;
    return this.authService.getAuthorizedUser().role.name === "User";
  }


  ngOnInit() {
    this.subscriptions.push(
      this.catalogService.getNumberOfPages(this.headerService.getSelectedLink().name).subscribe(value => {
        this.total = value;
        console.log(value);
        this.getPage(1);
      })
    );
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
      this.closeModal();
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

  unsubscribeFromService(service: Service) {
    this.subscriptions.push(
      this.subscriptionsService.deleteSubscriptionByServiceId(service.id).subscribe(value => {
        this.subscriptionsService.getSubscriptionsFromFapi();
        this.closeModal();
        setTimeout(() => {
          this.getCatalog();
        }, 1000);
      }));
  }


  public openModal(template: TemplateRef<any>): void {
    this.modalService.openModal(template);
  }

  public closeModal() {
    this.modalService.closeModal();
  }


  public onSelect(name: string) {
    this.closeModal();
    this.headerService.setSelectedLinkByName(name);
  }


  isThereSubscriptionToService(sevice: Service): boolean {
    return this.subscriptionsService.isThereSubscriptionToService(sevice);
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(s => s.unsubscribe());
  }
}
