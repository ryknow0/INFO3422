import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';//allows for use of the hero class from herot.ts
import { HeroService } from '../hero.service';//imports dat from hero.service
//accepts JSON object that can contains metadata properties
@Component({
  selector: 'app-heroes', //CSS element selector, app-heroes matches HTML element that ids the component in parent template
  templateUrl: './heroes.component.html', //location of component template file
  styleUrls: ['./heroes.component.css'] //location of the file's private CSS
})


export class HeroesComponent implements OnInit {
  heroes: Hero[];

  selectedHero: Hero;


  onSelect(hero: Hero):void{
    this.selectedHero = hero;
  }

  //Constructor has access to the hero components access
  //parameters simultaneously defines a priveate heroService property and id's it as a HeroService injection site
  constructor (private heroService: HeroService){};

    //updated to match the request from the heroes.service
  getHeroes(): void {
    //this.heroes = this.heroService.getHeroes();
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
      //previous version assigned array to this components 'heroes' property
      //this was done synchronously, but the new services allows us to run asynch
      //this waits for Obeservable to emit the array then subscribe passes the array to the callback
      //which sets the heroes property
  }

  ngOnInit() { //lifecycle hook executes after creation, put initialization logic here
    this.getHeroes();//will call getHeroes at the appropriate time after constructin the HeroesComponent instance
    //^^has a synchronous signature(needs this to maek requests from remote server)
    //it will return an Observable (could aslo tack callback, or return a Promise)

  }
//export the component class so you can import it elsewhere ie. in AppModule
delete(hero: Hero): void {
  this.heroes = this.heroes.filter(h => h !== hero);
  this.heroService.deleteHero(hero).subscribe();
}

}
