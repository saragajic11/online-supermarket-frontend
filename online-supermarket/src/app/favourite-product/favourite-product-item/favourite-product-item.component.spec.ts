import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FavouriteProductItemComponent } from './favourite-product-item.component';

describe('FavouriteProductItemComponent', () => {
  let component: FavouriteProductItemComponent;
  let fixture: ComponentFixture<FavouriteProductItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FavouriteProductItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FavouriteProductItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
