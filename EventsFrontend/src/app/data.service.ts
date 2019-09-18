import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router} from '@angular/router';

export class Events{
  constructor(
    public eventId:string,
    public eventName:string,
    public eventType:string,
    public eventDate:string,
    public eventFrequency:string,
    public eventAmount:number,
    public eventDescription:string
  ) {}
  
}

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private router: Router, private http: HttpClient) { }

  public getUsers() {
    return this.http.get('http://chamolia02:8080/readall')
  }

  public createEvent(Events: Events) {
    console.log(Events)
    return this.http.post('http://localhost:8080/createevent', Events)
    .subscribe(
      (data) => { 
        // Page redirect when getting response
        this.router.navigate(['/']);
      }, 
      (error) => {
        console.log("err", error);   
      });
  }

  public deleteEvent(Events: Events) {
    var id = Events.eventId;
    return this.http.delete<Events>('http://localhost:8080/events/' + id)
    .subscribe(
      (data) => { 
        // Page redirect when getting response
        window.location.reload();
      }, 
      (error) => {
        console.log("err", error);   
      });
  }

  public updateEvent(Events) {
    var id = Events.eventId;
    return this.http.put<Events>('http://localhost:8080/updateevent/' + id, Events)
    .subscribe(
      (data) => { 
        // Page redirect when getting response
        this.router.navigate(['/']);
      }, 
      (error) => {
        console.log("err", error);   
      });
  }

  public handleError(error) {
		console.log(error);
		return error.json().message || 'Server error, please try again later';
  }
}