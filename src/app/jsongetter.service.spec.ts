import { TestBed } from '@angular/core/testing';

import { JsongetterService } from './jsongetter.service';

describe('JsongetterService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: JsongetterService = TestBed.get(JsongetterService);
    expect(service).toBeTruthy();
  });
});
