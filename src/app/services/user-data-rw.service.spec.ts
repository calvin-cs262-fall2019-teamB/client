import { TestBed } from '@angular/core/testing';

import { UserDataRWService } from './user-data-rw.service';

describe('UserDataRWService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UserDataRWService = TestBed.get(UserDataRWService);
    expect(service).toBeTruthy();
  });
});
