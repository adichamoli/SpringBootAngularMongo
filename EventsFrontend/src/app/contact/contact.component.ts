import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgForm } from '@angular/forms';
import { DataService, Events } from '../data.service';
import { stringify } from 'querystring';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})

export class ContactComponent implements OnInit 
{

  event: Events = new Events(null, "", "", "", "", null, "");

  messageForm: FormGroup;
  submitted = false;
  success = false;
  

  constructor(private formBuilder: FormBuilder, private data: DataService) { }

  ngOnInit() {
    this.messageForm = this.formBuilder.group({
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

    if (this.messageForm.invalid) 
    {
        return;
    }

    this.success = true;
  }

  createEvents(): void {
    this.submitted = true;

    if (this.messageForm.invalid) 
    {
        return;
    }
    
    this.event.eventName = this.messageForm.get('eventname').value
    this.event.eventType = this.messageForm.value['eventtype']
    
    var date = this.messageForm.value['eventdate']
    var yyyy = date.slice(0,4)
    var MM = date.slice(5,7)
    var dd = date.slice(8,10)

    var final_date = dd + "/" + MM + "/" + yyyy
    this.event.eventDate = final_date
    var radio_button = this.messageForm.value['eventfrequency']
    this.event.eventFrequency = radio_button;
    this.event.eventAmount = this.messageForm.value['amount']
    this.event.eventDescription = this.messageForm.value['description']
    this.data.createEvent(this.event)

    this.success = true;
  }
}
