import { TestBed, inject } from '@angular/core/testing';

import { PostImageService } from './post-image.service';

describe('PostImageService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PostImageService]
    });
  });

  it('should ...', inject([PostImageService], (service: PostImageService) => {
    expect(service).toBeTruthy();
  }));
});
