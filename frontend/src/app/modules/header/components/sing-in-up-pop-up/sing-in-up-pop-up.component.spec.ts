import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {SingInUpPopUpComponent} from './sing-in-up-pop-up.component';

describe('SingInUpPopUpComponent', () => {
  let component: SingInUpPopUpComponent;
  let fixture: ComponentFixture<SingInUpPopUpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SingInUpPopUpComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingInUpPopUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
