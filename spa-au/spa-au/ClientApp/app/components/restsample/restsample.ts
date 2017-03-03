import {HttpClient, json} from 'aurelia-fetch-client';
import {inject} from 'aurelia-framework';

@inject(HttpClient)

export class RestSample {

   public httpClient: HttpClient;
   /**
    *
    */
   constructor(HttpClient) {
       this.httpClient=HttpClient;
       
   }

   getData() {
      this.httpClient.fetch('http://jsonplaceholder.typicode.com/posts/1')
      .then(response => response.json())
      .then(data => {
         console.log(data);
      });
   }

   myPostData = { 
      id: 101
   }
	
   postData(myPostData) {
      this.httpClient.fetch('http://jsonplaceholder.typicode.com/posts', {
         method: "POST",
         body: JSON.stringify(myPostData)
      })
		
      .then(response => response.json())
      .then(data => {
         console.log(data);
      });
   }

   myUpdateData = {
      id: 1
   }
	
   updateData(myUpdateData) {
      this.httpClient.fetch('http://jsonplaceholder.typicode.com/posts/1', {
         method: "PUT",
         body: JSON.stringify(myUpdateData)
      })
		
      .then(response => response.json())
      .then(data => {
         console.log(data);
      });
   }

   deleteData() {
      this.httpClient.fetch('http://jsonplaceholder.typicode.com/posts/1', {
         method: "DELETE"
      })
      .then(response => response.json())
      .then(data => {
         console.log(data);
      });
   }
  
}