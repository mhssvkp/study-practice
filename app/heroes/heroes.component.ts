import { Component, OnInit } from '@angular/core';
//service task 1
import {HeroService} from '../hero.service';
import {Hero} from '../hero';
import {HEROES} from '../mock-heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {     
   heroes;
   selectedHero:Hero;  
   //service task 2
   //inject service in to the constructor by creating a private variable of type service imported
  constructor(private heroService:HeroService) { }
  ngOnInit() {
    this.getHeroes();
  }  
   onSelectHero(hero: Hero): void  
  {
     this.selectedHero = hero;  
  }
  getHeroes():void
  {
    // this.heroes = this.heroService.getHeroes();
    //changed to async call
    this.heroService.getHeroes().subscribe(heroes=>this.heroes = heroes);
  }

}


