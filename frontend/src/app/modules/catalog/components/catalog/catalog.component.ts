import {Component, OnDestroy, OnInit} from '@angular/core';
import {CatalogService} from "../../../../services/catalog.service";
import {Service} from "../../models/service";
import {HeaderService} from "../../../../services/header.service";
import {Subscription} from "rxjs";
import {SubscriptionService} from "../../../../services/subscription.service";


@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit, OnDestroy {

  public catalog: Service[];
  private subscriptions: Subscription[] = [];

  constructor(private catalogService: CatalogService, private headerService: HeaderService, private subscriptionsService: SubscriptionService) {
  }

  ngOnInit() {
    this.getCatalog();
  }

  getCatalog() {
    this.subscriptions.push(this.catalogService.getCatalog(this.headerService.getSelectedLink().name)
      .subscribe(catalog => this.catalog = catalog));
  }

  subscribeToService(service: Service) {
    this.subscriptions.push(
      this.subscriptionsService.subscribeToService(service).subscribe(value => {
        if (value.id == null) {
          alert("Subscription error")
        }
        ;
        this.subscriptionsService.getSubscriptionsFromFapi()
      }));
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(s => s.unsubscribe());
  }
}
