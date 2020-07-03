import { TestBed } from '@angular/core/testing';

import { InquiryResponseService } from './inquiry-response.service';

describe('InquiryResponseService', () => {
  let service: InquiryResponseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InquiryResponseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
