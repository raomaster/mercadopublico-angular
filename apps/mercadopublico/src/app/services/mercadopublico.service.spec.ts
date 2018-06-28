import { TestBed, inject } from '@angular/core/testing';

import { MercadopublicoService } from './mercadopublico.service';

describe('MercadopublicoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MercadopublicoService]
    });
  });

  it('should be created', inject([MercadopublicoService], (service: MercadopublicoService) => {
    expect(service).toBeTruthy();
  }));
});
