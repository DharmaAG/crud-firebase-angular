import { TestBed } from '@angular/core/testing';

import { comidaService } from './comida.service';

describe('ComidaService', () => {
  let service: comidaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(comidaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
