import { Speaker } from "../speaker/speaker";
import { Attendee } from "../attendee/attendee";

export class Conference{
    private Id: number;
    private name: string;
    private date: Date;
    private location: string;
    private attendees: Attendee[] = [];
    private conferenceURL: string;
    private locationDetails: string;
    private conferenceSpeaker : Speaker;
    
  
    constructor(Id: number, name: string, date: Date, location: string, 
    conferenceURL: string, locationDetails: string, conferenceSpeaker: Speaker) {
      this.Id = Id;
      this.name = name;
      this.date = date;
      this.location = location;
      this.conferenceURL = conferenceURL;
      this.locationDetails = locationDetails;
      this.conferenceSpeaker = conferenceSpeaker;
    }

    public getId(): Number {
      return this.Id;
    }

    public getName(): string {
      return this.name;
    }
  
    public getDate(): Date {
      return this.date;
    }
  
    public getLocation(): string {
      return this.location;
    }
  
    public getAttendees(): Attendee[] {
      return this.attendees;
    }
    
    public getconferenceURL(): string {
      return this.conferenceURL;
    }
    public getlocationDetails(): string {
      return this.locationDetails;
    }
    public getSpeaker(): Speaker{
      return this.conferenceSpeaker;
    }
  }