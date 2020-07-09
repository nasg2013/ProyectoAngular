import { TestBed } from '@angular/core/testing';

import { CommentNewService } from './comment-new.service';

describe('CommentNewService', () => {
  let service: CommentNewService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CommentNewService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
