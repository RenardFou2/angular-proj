import { Speaker } from "../speaker/speaker";

export class Conference{
    private Id: number;
    private name: string;
    private date: Date;
    private location: string;
    private attendees: number;
    private conferenceURL: string;
    private locationDetails: string;
    private conferenceSpeaker : Speaker;
  
    
  
    constructor(Id: number, name: string, date: Date, location: string, attendees: number, 
    conferenceURL: string, locationDetails: string, conferenceSpeaker: Speaker) {
      this.Id = Id;
      this.name = name;
      this.date = date;
      this.location = location;
      this.attendees = attendees;
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
  
    public getAttendees(): number {
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

    public setAttendees(attendees: number): void{
      this.attendees = attendees;
    }
  }