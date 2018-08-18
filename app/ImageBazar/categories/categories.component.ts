import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  objCategories :any[];

  constructor(private data : DataService,private route:ActivatedRoute) { }

  ngOnInit() {
    this.objCategories = this.data.getCategories(); 
    this.route.queryParams.subscribe(
      route => {
        console.log(route["catid"]);
      }
    );
  }

}
