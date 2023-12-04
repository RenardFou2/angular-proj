import { Component } from '@angular/core';
import { Inject } from '@angular/core';
import { SpeakerComponent } from '../speaker/speaker.component';

@Component({
  selector: 'app-conference',
  templateUrl: './conference.component.html',
  styleUrl: './conference.component.css'
})

export class ConferenceComponent {
  private name: string;
  private date: Date;
  private location: string;
  private attendees: number;
  private conferenceURL: string;
  private locationDetails: string;
  private conferenceSpeaker : SpeakerComponent;

  

  constructor(@Inject(String) name: string, @Inject(Date) date: Date, @Inject(String) location: string, @Inject(Number) attendees: number, 
  @Inject(String) conferenceURL: string, @Inject(String) locationDetails: string, @Inject(SpeakerComponent) conferenceSpeaker: SpeakerComponent) {

    this.name = name;
    this.date = date;
    this.location = location;
    this.attendees = attendees;
    this.conferenceURL = conferenceURL;
    this.locationDetails = locationDetails;
    this.conferenceSpeaker = conferenceSpeaker;
  }

  // Getter methods
  getName(): string {
    return this.name;
  }

  getDate(): Date {
    return this.date;
  }

  getLocation(): string {
    return this.location;
  }

  getAttendees(): number {
    return this.attendees;
  }
  
  getconferenceURL(): string {
    return this.conferenceURL;
  }
  getlocationDetails(): string {
    return this.locationDetails;
  }
  getSpeaker(): SpeakerComponent{
    return this.conferenceSpeaker;
  }
}
