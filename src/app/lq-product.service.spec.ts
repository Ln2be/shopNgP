import { TestBed, inject } from '@angular/core/testing';

import { LqProductService } from './lq-product.service';

describe('LqProductService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LqProductService]
    });
  });

  it('should be created', inject([LqProductService], (service: LqProductService) => {
    expect(service).toBeTruthy();
  }));
});
