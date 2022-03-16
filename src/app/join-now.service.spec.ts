import { TestBed } from '@angular/core/testing';

import { JoinNowService } from './join-now.service';

describe('JoinNowService', () => {
  let service: JoinNowService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JoinNowService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
