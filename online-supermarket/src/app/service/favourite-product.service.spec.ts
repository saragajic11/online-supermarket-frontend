import { TestBed } from '@angular/core/testing';

import { FavouriteProductService } from './favourite-product.service';

describe('FavouriteProductService', () => {
  let service: FavouriteProductService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FavouriteProductService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
