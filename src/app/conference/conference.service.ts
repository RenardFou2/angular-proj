import { Injectable } from '@angular/core';
import { Conference } from './conference';
import { SpeakerService } from '../speaker/speaker.service';

@Injectable({
  providedIn: 'root'
})
export class ConferenceService {


  private conferences: Conference[] = [];

  getConferences(): Conference[] {
    return this.conferences;
  }

  addConference(conference: Conference): void {
    this.conferences.push(conference);
  }

  constructor(private speakerService: SpeakerService) { 
    this.conferences = [
      new Conference("Test conf",new Date(2023,11,31),"China",0,"testURL.com","Example details", this.speakerService.getSpeaker(1))
    ];
  }
  
}
