import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmPurchaseDialogComponent } from './confirm-purchase-dialog.component';

describe('ConfirmPurchaseDialogComponent', () => {
  let component: ConfirmPurchaseDialogComponent;
  let fixture: ComponentFixture<ConfirmPurchaseDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfirmPurchaseDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmPurchaseDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
