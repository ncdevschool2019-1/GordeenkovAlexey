import {Component, OnDestroy, OnInit} from '@angular/core';
import {CatalogService} from "../../../../services/catalog.service";
import {Service} from "../../models/service";
import {HeaderService} from "../../../../services/header.service";
import {Subscription} from "rxjs";
import {SubscriptionService} from "../../../../services/subscription.service";
import {BillingAccountService} from "../../../../services/billing-account.service";


@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit, OnDestroy {

  public catalog: Service[];
  private subscriptions: Subscription[] = [];

  constructor(private catalogService: CatalogService, private headerService: HeaderService,
              private subscriptionsService: SubscriptionService, private billingAccountService: BillingAccountService) {
  }

  ngOnInit() {
    this.getCatalog();
    this.subscriptionsService.getSubscriptionsFromFapi();
  }

  getCatalog() {
    this.subscriptions.push(this.catalogService.getCatalog(this.headerService.getSelectedLink().name)
      .subscribe(catalog => {
          this.catalog = catalog.filter(serv =>
            !this.subscriptionsService.isThereSubscriptionToService(serv))
        }
      ));

  }

  subscribeToService(service: Service) {

    this.subscriptions.push
    (this.billingAccountService.getTotalBalanse().subscribe(value => {
      if (service.cost > value) {
        alert("Not enough money");
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

  ngOnDestroy(): void {
    this.subscriptions.forEach(s => s.unsubscribe());
  }
}
