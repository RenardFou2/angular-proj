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
      new Conference(1,"ATest conf",new Date(2023,11,31),"China","testURL.com","Example details", this.speakerService.getSpeaker(0)),
      new Conference(2,"BTest conf 2",new Date(2025,5,11),"Japan","fakeSite.com","Some more details", this.speakerService.getSpeaker(0)),
      new Conference(3,"CTest conf 3",new Date(2024,2,25),"Poland","totalNotAScam.com","", this.speakerService.getSpeaker(0))
    ];
  }

  //Filtr do sortowania
  sortConferencesByName(order: 'asc' | 'dsc'): Conference[] {
    
    return this.conferences.sort((a, b) => {
      const nameA = a.getName().toUpperCase();
      let nameB = b.getName().toUpperCase();

      if (order === 'asc') {
        return nameA.localeCompare(nameB);
      } else if (order === 'dsc') {
        return nameB.localeCompare(nameA);
      } else {
        // Default
        return 0;
      }
    });
  }
  
}
