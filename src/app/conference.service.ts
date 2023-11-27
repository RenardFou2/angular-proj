import { Injectable } from '@angular/core';
import { ConferenceComponent } from './conference/conference.component';

@Injectable({
  providedIn: 'root'
})
export class ConferenceService {

  private conferences: ConferenceComponent[] = [];

  getConferences(): ConferenceComponent[] {
    return this.conferences;
  }

  addConference(conference: ConferenceComponent): void {
    this.conferences.push(conference);
  }

  constructor() { }
}
