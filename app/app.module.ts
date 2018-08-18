import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import {FormsModule} from '@angular/forms';
import { CategoriesComponent } from './ImageBazar/categories/categories.component';
import { CategoryimagesComponent } from './ImageBazar/categoryimages/categoryimages.component';
import { ImagedetailsComponent } from './ImageBazar/imagedetails/imagedetails.component';
import { HttpModule } from '@angular/http';
import { DataService } from './ImageBazar/data.service';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';

import { AppRoutingModule } from './app-routing.module';

import {RouterModule} from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MessagesComponent } from './messages/messages.component';


@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    CategoriesComponent,
    CategoryimagesComponent,
    ImagedetailsComponent,
    HeroDetailComponent,
    DashboardComponent,
    MessagesComponent
  ],

  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,  
    AppRoutingModule
  ],
  providers: 
  [
    DataService    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
