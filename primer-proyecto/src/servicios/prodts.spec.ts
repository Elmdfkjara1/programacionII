import { TestBed } from '@angular/core/testing';

import { Prodts } from './prodts';

describe('Prodts', () => {
  let service: Prodts;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Prodts);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
