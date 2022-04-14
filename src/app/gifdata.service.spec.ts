import { TestBed } from '@angular/core/testing';

import { GifdataService } from './gifdata.service';

describe('GifdataService', () => {
  let service: GifdataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GifdataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
