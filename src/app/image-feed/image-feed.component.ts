import { Component, OnInit } from '@angular/core';
import { GrabImagesService } from '../grab-images.service';


@Component({
  selector: 'app-image-feed',
  templateUrl: './image-feed.component.html',
  styleUrls: ['./image-feed.component.css']
})
export class ImageFeedComponent implements OnInit {
	
	getData: any;
	postData: any;
  errorData: any;
	uploaded: boolean;
  selectedStatus: Array<boolean> = [];

  constructor(private imageService:GrabImagesService) { }

  //Fetch data on init & introduce
  ngOnInit() {
  	this.imageService.fetchData()
  	.subscribe(
  		data => this.getData = data,
  		error => alert(error), 
  		 () => console.log("finished")
  	);
  }

 
  //function to upload image data
  sendJson(image, index) {
  	this.imageService.postData = image.path
  	this.imageService.postJSON()
  	.subscribe(
  		data => this.postData = data,
  		error => this.errorData = JSON.parse(error._body), 
  		 () => this.selectedStatus[index] = true
  	);
  }




}
