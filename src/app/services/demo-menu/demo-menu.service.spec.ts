import { TestBed } from '@angular/core/testing';

import { DemoMenuService } from './demo-menu.service';

describe('DemoMenuService', () => {
  let service: DemoMenuService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DemoMenuService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
