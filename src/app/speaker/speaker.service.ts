import { Injectable } from '@angular/core';
import { Speaker } from './speaker';

@Injectable({
  providedIn: 'root'
})

export class SpeakerService {

  private speakers: Speaker[] = [
    new Speaker(1, "Maciej","Nieciecki", new Date(2002,0,31) ,"Harpi473@gmail.com")
  ];

  public getSpeakers(): Speaker[] {
    return this.speakers;
  }
  public getSpeaker(index: number ): Speaker {
    return this.speakers[index];
  }

  public addSpeaker(conference: Speaker): void {
    this.speakers.push(conference);
  }
  constructor() { }

  //Filtr do sortowania
  sortSpeakersByName(order: 'asc' | 'dsc'): Speaker[] {
    
    return this.speakers.sort((a, b) => {
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
