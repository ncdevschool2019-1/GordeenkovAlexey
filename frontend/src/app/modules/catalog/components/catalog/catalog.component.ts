import {Component, OnDestroy, OnInit, TemplateRef} from '@angular/core';
import {CatalogService} from "../../../../services/catalog.service";
import {HeaderService} from "../../../../services/header.service";
import {Observable, Subscription} from "rxjs";
import {SubscriptionService} from "../../../../services/subscription.service";
import {BillingAccountService} from "../../../../services/billing-account.service";
import {ModalService} from "../../../../services/modal.service";
import {AuthorizationService} from "../../../../services/authorization.service";
import {Ng4LoadingSpinnerService} from "ng4-loading-spinner";
import {Service} from "../../../account/models/service";

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit, OnDestroy {

  private subscriptions: Subscription[] = [];

  asyncCatalog: Observable<Service[]>;
  p: number = 1;
  total: number;

  ready = false;

  getPage(page: number) {
    this.loadingService.show();
    this.asyncCatalog = this.catalogService.getPage(this.headerService.getSelectedLink().name, page);
    this.p = page;
    this.subscriptions.push(
      this.asyncCatalog.subscribe(() => {
        this.loadingService.hide();
      })
    );
  }


  constructor(private loadingService: Ng4LoadingSpinnerService, private catalogService: CatalogService, private headerService: HeaderService,
              private subscriptionsService: SubscriptionService, private billingAccountService: BillingAccountService,
              private modalService: ModalService, private authService: AuthorizationService) {
  }


  isUser(): boolean {
    return this.authService.isUser()
  }

  isAdmin(): boolean {
    return this.authService.isAdmin();
  }


  ngOnInit() {
    this.subscriptions.push(
      this.authService.getUserAuthorizedSubject().subscribe(value => {
        this.ready = value;

        this.subscriptionsService.getSubscriptionsFromFapi();
        this.subscriptions.push(
          this.catalogService.getNumberOfPages(this.headerService.getSelectedLink().name).subscribe(value => {
            this.total = value;
            this.getPage(1);
          })
        );
      })
    )
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
          }));
      }
    }));
  }

  unsubscribeFromService(service: Service) {
    this.subscriptions.push(
      this.subscriptionsService.deleteSubscriptionByServiceId(service.id).subscribe(value => {
        this.subscriptionsService.getSubscriptionsFromFapi();
        this.closeModal();
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


  isThereSubscriptionToService(service: Service): boolean {
    return this.subscriptionsService.isThereSubscriptionToService(service);
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(s => s.unsubscribe());
  }
}
