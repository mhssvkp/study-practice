import { Injectable } from '@angular/core';
import {Http,Response} from '@angular/http';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators'
//import 'rxjs/add/operator/map';

// import 'rxjs/add/operator/map';npm 


@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: Http) { }

  //TODO 1:
  getCategories()
  {
    // return this.http.get('https://jsonplaceholder.typicode.com/posts').map(res => res.json());

    var data = [
      {id:1, name:"Beauty&Fashion",path:"/assets/Images/beauty-fashion.jpg"},
      {id:2, name:"Food&drink",path:"/assets/Images/food-drink.jpg"},
      {id:3, name:"Health&Fitness",path:"/assets/Images/health-fitness.jpg"},
      {id:4, name:"Lifestyle",path:"/assets/Images/lifestyle-adults.jpg"}
    ];

    return data;
  }

  //TODO 2
  getCategoryImages(categoryID)
  {
    var categoryImages = [
      {
        id:1,
        path:"/assets/Images/burger.jpg"
        
      },
      {
        id:2,
        path:"/assests/Images/sandwich.jpg"
      },
      {
        id:3,
        path:"/assets/Images/sandwich.jpg"
      }
    ];
    return categoryImages;
    }

  //TODO3:
  getImageDetails(imageId)
  {
    var imageDetails = [
      {
        imgid :1,
        name: "p1.jpg",
        type:"jpg",
        size:"20kb",
        resolution:"12x20"
      },
      {
        imgid :1,
        name: "p2.jpg",
        type:"gif",
        size:"20kb",
        resolution:"12x20"
      },
      {
        imgid :1,
        name: "p3.jpg",
        type:"png",
        size:"20kb",
        resolution:"12x20"
      }
    ];

    return imageDetails;
  }

  //TODO 4
  getContactDetails(imageID)
  {

  }

  //TODO 5
  addtoCart(form)
  {

  }

}

