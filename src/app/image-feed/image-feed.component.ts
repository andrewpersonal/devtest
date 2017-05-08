import { Component, OnInit } from '@angular/core';
import { GrabImagesService } from '../grab-images.service';
import { PostImageService } from '../post-image.service';


@Component({
  selector: 'app-image-feed',
  templateUrl: './image-feed.component.html',
  styleUrls: ['./image-feed.component.css']
})
export class ImageFeedComponent implements OnInit {
	
	getData: any;
	postData: any;
	uploading: boolean;

  constructor(private imageService:GrabImagesService, private postService:PostImageService) { }

  ngOnInit() {
  	this.imageService.fetchData()
  	.subscribe(
  		data => this.getData = data,
  		error => alert(error), 
  		 () => console.log("finished")
  	);
  }

  testClick() {
  	this.imageService.fetchData()
  	.subscribe(
  		data => this.getData = JSON.stringify(data),
  		error => alert(error), 
  		 () => console.log("finished")
  	);
  }

  testPostClick() {
  	this.postService.postData('lala')
  	.subscribe(
  		data => this.postData = JSON.stringify(data),
  		error => console.error('An error occured', error), 
  		 () => console.log("finished")
  	);
  }

  sendJson(image) {
  	this.imageService.postData = image.path
  	this.imageService.postJSON()
  	.subscribe(
  		data => this.postData = JSON.stringify(data),
  		error => console.error('An error occured', error), 
  		 () => console.log(this.imageService.postData)
  	);
  }




}
