import { TestBed } from '@angular/core/testing';

import { BackupUsersService } from './backup-users.service';

describe('BackupUsersService', () => {
  let service: BackupUsersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BackupUsersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
