import { TestBed } from '@angular/core/testing';

import { MunicipiosapiService } from './municipiosapi.service';

describe('MunicipiosapiService', () => {
  let service: MunicipiosapiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MunicipiosapiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
