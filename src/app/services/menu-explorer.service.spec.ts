import { TestBed } from '@angular/core/testing';

import { MenuExplorerService } from './menu-explorer.service';

describe('MenuExplorerService', () => {
  let service: MenuExplorerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MenuExplorerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
