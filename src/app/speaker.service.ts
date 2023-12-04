import { Injectable } from '@angular/core';
import { SpeakerComponent } from './speaker/speaker.component';

@Injectable({
  providedIn: 'root'
})

export class SpeakerService {

  private speakers: SpeakerComponent[] = [];

  getSpeakers(): SpeakerComponent[] {
    return this.speakers;
  }

  addSpeaker(conference: SpeakerComponent): void {
    this.speakers.push(conference);
  }

  constructor() { }

}
