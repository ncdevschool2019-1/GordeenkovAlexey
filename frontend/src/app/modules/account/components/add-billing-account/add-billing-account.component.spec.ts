import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {AddBillingAccountComponent} from './add-billing-account.component';

describe('AddBillingAccountComponent', () => {
  let component: AddBillingAccountComponent;
  let fixture: ComponentFixture<AddBillingAccountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AddBillingAccountComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddBillingAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
