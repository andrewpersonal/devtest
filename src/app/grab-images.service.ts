import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import {Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()

export class GrabImagesService {
	
	//declare vars for later use
	Images: any;
	postData: any; 

  constructor(private http:Http) { 

  }

  // Detching data from api/ todo - replace urls with var so only have to change in one place in future

  fetchData() {
  	return this.http.get('https://devtest.tailify.com/api/list')
  		.map(res =>res.json());
  }

  //Posting data/ note - does not take any name that isn't listed from the fetch. Filename to be uploaded only

  postJSON() {
  	var json = this.postData;
  	var params = {
  		pastebin_api_key: '779d0a345713a837a6c9692258a55f04',
  		filename: json
  	}
    var headers =  new Headers();

    headers.append('Content-Type','application/json');

	  return this.http.post('https://devtest.tailify.com/api/upload', params, {
	  	headers: headers
	  })
	  .map(res => res.json());
	}
}
