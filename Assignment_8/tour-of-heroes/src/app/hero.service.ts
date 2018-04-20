import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
//importing obserable to use the asynchronous part of getHeros
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';//to simulate getting data from a "server"
//add messages service 
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
 };
 

@Injectable()
export class HeroService {

    //modifying the base constructor with parameter for a private messate property
    //the messageservice will be injected when it creates the HeroeService
  constructor(private http: HttpClient, private messageService: MessageService) { }
  //^^ typical of a "service-in-service" scenario
  //messageService is injected into the HeroService which is injected into the HeroesComponent


  //Grabbing and retruning local hero array from hero component
  /**getHeroes(): Hero[]{
    return HEROES;
}**/

//Grabs the hero information from "server" using the react 'of()' fuctions line5&6
//Gets hero infomration and returns and Observable//this needs to be reflected in the HeroesComponent
/**getHeroes(): Observable<Hero[]> {
  //Todo: send the message _after_ fetching the heroes
  //sedns message when heroes are fetched
  this.messageService.add('HeroService: fetched heroes');
  return of(HEROES);//returns Observable<Hero[]> as a single value of the array of mock heroes=HEROES
}**/
private heroesUrl = 'api/heroes'; //URL to web api

getHeroes (): Observable<Hero[]> {
  return this.http.get<Hero[]>(this.heroesUrl)
  .pipe(
    tap(heroes => this.log(`fetched heroes`)),
    catchError(this.handleError('getHeroes', []))
  );
} 

getHero(id: number): Observable<Hero> {
  const url = `${this.heroesUrl}/${id}`;
  return this.http.get<Hero>(url).pipe(
    tap(_ => this.log(`fetched hero id=${id}`)),
    catchError(this.handleError<Hero>(`getHero id=${id}`))
  ); 
}
private log (message: string) {
  this.messageService.add('HeroService: ' + message);
}
private handleError<T> (operation = 'operation', result?: T) {
  return (error: any): Observable<T> => {
    // TODO: send the error to remote logging infrastructure
    console.error(error); // log to console instead
 
    // TODO: better job of transforming error for user consumption
    this.log(`${operation} failed: ${error.message}`);
 
    // Let the app keep running by returning an empty result.
    return of(result as T);
  };
 }
 updateHero (hero: Hero): Observable<any> {
  return this.http.put(this.heroesUrl, hero, httpOptions).pipe(
    tap(_ => this.log(`updated hero id=${hero.id}`)),
    catchError(this.handleError<any>('updateHero'))
  );
 }
 addHero (hero: Hero): Observable<Hero> {
  return this.http.post<Hero>(this.heroesUrl, hero, httpOptions).pipe(
    tap((hero: Hero) => this.log(`added hero w/ id=${hero.id}`)),
    catchError(this.handleError<Hero>('addHero'))
  );
 }
 deleteHero (hero: Hero | number): Observable<Hero> {
  const id = typeof hero === 'number' ? hero : hero.id;
  const url = `${this.heroesUrl}/${id}`;
 
  return this.http.delete<Hero>(url, httpOptions).pipe(
    tap(_ => this.log(`deleted hero id=${id}`)),
    catchError(this.handleError<Hero>('deleteHero'))
  );
 }
 searchHeroes(term: string): Observable<Hero[]> {
  if (!term.trim()) {
    // if not search term, return empty hero array.
    return of([]);
  }
  return this.http.get<Hero[]>(`api/heroes/?name=${term}`).pipe(
    tap(_ => this.log(`found heroes matching "${term}"`)),
    catchError(this.handleError<Hero[]>('searchHeroes', []))
  );
 }
 
 

}
