import { TestBed, inject } from '@angular/core/testing';

import { GrabImagesService } from './grab-images.service';

describe('GrabImagesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GrabImagesService]
    });
  });

  it('should ...', inject([GrabImagesService], (service: GrabImagesService) => {
    expect(service).toBeTruthy();
  }));
});
