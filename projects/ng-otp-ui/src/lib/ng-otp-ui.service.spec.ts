import { TestBed } from '@angular/core/testing';

import { NgOtpUIService } from './ng-otp-ui.service';

describe('NgOtpUIService', () => {
  let service: NgOtpUIService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgOtpUIService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
