import { Injectable } from '@angular/core';


@Injectable()
export class MessageService {
  //setup messages in the app
  messages: string[]=[];//sets the messages property as an empty string array
  add(message: string){//takes messages and sends them out
    //takes the message and adds it to the cache
    this.messages.push(message);
  }

    //clears the messages cache
  clear() {
    this.messages =[];
  }
  // do not need this: constructor() { }

}
