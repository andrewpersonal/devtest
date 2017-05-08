import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/catch';

@Injectable()
export class PostImageService {
	result: any;
  constructor(private http:Http) {

   }

  postData(postData:String) {
  	const imageData = {
  		pastebin_api_key: '779d0a345713a837a6c9692258a55f04',
  		filename: postData
  	}

  	

  	return this.http.post('https://devtest.tailify.com/api/upload', imageData)
		.map(res => res.json())
  		
  }

  private handleError(error: any): Promise<any> {
	  console.error('An error occurred', error); // for demo purposes only
	  return Promise.reject(error.message || error);
	}

}
