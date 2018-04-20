import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';//allows for use of the hero class from herot.ts
import { HEROES } from '../mock-heroes';
//accepts JSON object that can contains metadata properties
@Component({
  selector: 'app-heroes', //CSS element selector, app-heroes matches HTML element that ids the component in parent template
  templateUrl: './heroes.component.html', //location of component template file
  styleUrls: ['./heroes.component.css'] //location of the file's private CSS
})


export class HeroesComponent implements OnInit {
  heroes = HEROES;

  selectedHero: Hero;


  onSelect(hero: Hero):void{
    this.selectedHero = hero;
  }
  constructor() { }

  ngOnInit() { //lifecycle hook executes after creation, put initialization logic here
  }
//export the component class so you can import it elsewhere ie. in AppModule
}
