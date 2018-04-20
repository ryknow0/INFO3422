import { Component, OnInit, Input } from '@angular/core';//hero needs to be an input property so the HeroesComponent can bind to it
import { Hero } from '../hero';

import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { HeroService }  from '../hero.service';



@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})


export class HeroDetailComponent implements OnInit {
  @Input() hero: Hero;
  constructor(
   private route: ActivatedRoute,//holds info  about the route to this instance of the component
   private heroService: HeroService,//getshero data from the remote server and will be used to get the her-to-display
   private location: Location // angular service for interacting with the browswer
  ) { }

  ngOnInit(): void {
    this.getHero();
  }
  getHero(): void{
    const id = +this.route.snapshot.paramMap.get('id'); //static image of the route infomrration after the component is created
    this.heroService.getHero(id) //paraMap dictionary of route parameter values extracted from the URL id adn returns the id
     .subscribe(hero => this.hero = hero);

  }
  goBack(): void {
    this.location.back();
  }
 save(): void {
   this.heroService.updateHero(this.hero)
   .subscribe(() => this.goBack());
   }

}
