import { Component, OnInit } from '@angular/core';
//this component should display all messages even those sent by HeroService
import { MessageService } from '../message.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

    //allow a parameter that is a public messageService property
    //angulare will inject MessageService to the property upon create of heroService
  constructor(public messageService: MessageService) { }
  //^^property needs to be public b/c it is bound to the template
  //only angular can bind to public component properties

  ngOnInit() {
  }

}
