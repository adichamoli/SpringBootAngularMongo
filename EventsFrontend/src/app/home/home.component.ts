import { Component, OnInit } from '@angular/core';
import { DataService, Events } from '../data.service'
import { Router, NavigationExtras } from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {

  users: Object;
  Events: any;

  constructor(private router: Router, private data: DataService) { }

  ngOnInit() {
    this.data.getUsers().subscribe(data => {
        this.users = data;
        console.log(this.users);
      }
    );
  }

  deleteEvent(Events: Events) {
    this.data.deleteEvent(Events)
  }

  updateEvent(Events: Events) {
    this.Events = Events;
    let navigationExtras: NavigationExtras = {
      queryParams: {
        eventId : Events.eventId,
        eventName : Events.eventName,
        eventType : Events.eventType,
        eventDate : Events.eventDate,
        eventFrequency : Events.eventFrequency,
        eventAmount : Events.eventAmount,
        eventDescription : Events.eventDescription
      }
    }
    this.router.navigate(['update'], navigationExtras);
  }
}
