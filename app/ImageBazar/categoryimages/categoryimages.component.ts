import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-categoryimages',
  templateUrl: './categoryimages.component.html',
  styleUrls: ['./categoryimages.component.css']
})

export class CategoryimagesComponent implements OnInit {

  display = 'none';
  imgID: any;
  objCategoryImages: any;
  name = "XYZ pvt ltd";
  email = "test@cognizant.com";
  mobile ='9894989865';

  constructor(private data: DataService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.imgID = this.route.snapshot.paramMap.get('id');
    //replace this with asynchronous service calll    
    this.objCategoryImages = this.data.getCategoryImages(this.imgID);
  }


  openContactDetails(id) {
    this.display = 'block';    
  }

  closeModalDialog()
  { 
    this.display = 'none';
  }

}
