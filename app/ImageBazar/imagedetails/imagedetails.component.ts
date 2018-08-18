// import { Component, OnInit } from '@angular/core';
// import { DataService } from '../data.service';
// import { Observable } from 'rxjs';


// @Component({
//   selector: 'app-imagedetails',
//   templateUrl: './imagedetails.component.html',
//   styleUrls: ['./imagedetails.component.css']
// })
// export class ImagedetailsComponent implements OnInit {
//   posts :any[];

//   constructor(private data : DataService) { }

//   ngOnInit() {
    
//   }

// }
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { DataService } from '../data.service';
import { NgForm } from "@angular/forms";

@Component({
  selector: 'app-imagedetails',
  templateUrl: './imagedetails.component.html',
  styleUrls: ['./imagedetails.component.css']
})
export class ImagedetailsComponent implements OnInit {

id: number;
imageDetails : any[];

selected:boolean = false;

  constructor(private route:ActivatedRoute, private data: DataService) { 
    console.log('this is constructor');
  }


  ngOnInit() {
     this.id = +this.route.snapshot.params["imgid"];
     this.imageDetails = this.data.getImageDetails(this.id);
  }

  onSubmit(f : NgForm)
  {
    if(f.touched)
      this.selected = true;
      
    var imgID= f.controls['imgid'].value;
    this.addToCart(imgID);
    console.log(f);
  }

  addToCart(id: any)
  {
     this.data.addtoCart(id);
  }

}
