import { Component } from '@angular/core';
import { GrabImagesService } from './grab-images.service';
import { PostImageService } from './post-image.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

	constructor(private imageService:GrabImagesService) {

	}



	ngOnInit() {

	}

	




}
