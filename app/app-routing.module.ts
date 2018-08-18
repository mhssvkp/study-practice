import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule,Routes} from '@angular/router';
import { CategoriesComponent  } from './ImageBazar/categories/categories.component';
import { CategoryimagesComponent } from './ImageBazar/categoryimages/categoryimages.component';
import { AppComponent } from './app.component';
import {HeroesComponent} from './heroes/heroes.component';
import {ImagedetailsComponent} from './ImageBazar/imagedetails/imagedetails.component';

const appRoute : Routes =[
  //to Do in  route add path and component
  { path:'', component: CategoriesComponent },
  { path:'Category', component: CategoriesComponent },
  { path:'Category/:id', component: CategoriesComponent },
   {path:'CategoryImg/:id',component:CategoryimagesComponent},
   {path:'ImageDetails/:id',component:ImagedetailsComponent },
  // comment
   {path:'heroes',component: HeroesComponent}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoute)
  ],
  exports:[RouterModule],
  declarations: []
})
export class AppRoutingModule { }
