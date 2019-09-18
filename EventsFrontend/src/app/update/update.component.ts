import { Component, OnInit } from '@angular/core';
import { DataService, Events } from '../data.service'
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit {
  editform: FormGroup;
  public eventId:string;
  public eventName:string;
  public eventType:string;
  public eventDate:string;
  public eventFrequency:string;
  public eventAmount:number;
  public eventDescription:string
  public date_val:string;
  public Events : Events;
  submitted = false;
  success = false;
  event: Events = new Events(null, "", "", "", "", null, "");

  constructor(private formBuilder: FormBuilder, private router: Router, private data: DataService, private route: ActivatedRoute) { 
    this.newMethod();
  }

  private newMethod() {
    this.route.queryParams.subscribe(params => {
      this.eventId = params["eventId"];
      this.eventName = params["eventName"];
      this.eventType = params["eventType"];
      this.eventDate = params["eventDate"];
      this.eventFrequency = params["eventFrequency"];
      this.eventAmount = params["eventAmount"];
      this.eventDescription = params["eventDescription"];
    });
 
    var dd = this.eventDate.slice(0,2)
    var MM = this.eventDate.slice(3,5)
    var yyyy = this.eventDate.slice(6,10)

    var date_val = yyyy + "-" + MM + "-" + dd
    this.eventDate=date_val
  }

  ngOnInit() {
    this.editform = this.formBuilder.group({
      eventid: ['', Validators.required],
      eventname: ['', Validators.required],
      eventtype: ['', Validators.required],
      eventdate: ['', Validators.required],
      eventfrequency: ['', Validators.required],
      amount: ['', Validators.required],
      description: ['', Validators.required]
    });
  }

  onSubmit() 
  {
    this.submitted = true;

    if (this.editform.invalid) 
    {
        return;
    }

    this.success = true;
  }

  updateEvents(){    
    this.submitted = true;
    
    this.event.eventId = this.eventId
    this.event.eventName = this.eventName
    this.event.eventType = this.eventType
    var local_date = this.eventDate
    var corrected_date = local_date.slice(8,10)  + "/" + local_date.slice(5,7) + "/" + local_date.slice(0,4)
    this.event.eventDate = corrected_date
    this.event.eventFrequency = this.eventFrequency
    this.event.eventAmount = this.eventAmount
    this.event.eventDescription = this.eventDescription

    if(this.editform.value['eventname'] != "")
    {
      this.event.eventName = this.editform.value['eventname']
    }

    if(this.editform.value['eventtype'] != "")
    {
      this.event.eventType = this.editform.value['eventtype']
    }

    if(this.editform.value['eventdate'] != "")
    {
      var date = this.editform.value['eventdate']
      var yyyy = date.slice(0,4)
      var MM = date.slice(5,7)
      var dd = date.slice(8,10)

      var final_date = dd + "/" + MM + "/" + yyyy
      this.event.eventDate = final_date
    }

    if(this.editform.value['eventfrequency'] != "")
    {
      var radio_button = this.editform.value['eventfrequency']
      this.event.eventFrequency = radio_button;
    }

    if(this.editform.value['amount'] != "")
    {
      this.event.eventAmount = this.editform.value['amount']
    }
    
    if(this.editform.value['description'] != "")
    {
      this.event.eventDescription = this.editform.value['description']
    }

    this.data.updateEvent(this.event)
    this.success = true;
  }
    
  
}
