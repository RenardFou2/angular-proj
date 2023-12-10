import { Component, HostListener } from '@angular/core';
import { Conference } from '../conference';
import { ConferenceService } from '../conference.service';
import { Speaker } from "../../speaker/speaker";

@Component({
  selector: 'app-conference-list',
  templateUrl: './conference-list.component.html',
  styleUrl: './conference-list.component.css'
})
export class ConferenceListComponent {
  conferences: Conference[];
  selected: number;

  constructor(private conferenceService: ConferenceService) {
    this.conferences = this.conferenceService.getConferences();
    this.selected = -1;
  }

  select(which: number): void {
    this.selected = which;
  }

/* Na lekcji zapytać co nie ten teges
  sortConferencesByName(order: 'asc' | 'dsc'): ConferenceComponent[] {
    return this.conferences.sort((a, b) => {
      const nameA = a.getName.toUpperCase();
      const nameB = b.getName.toUpperCase();

      if (order === 'asc') {
        return nameA.localeCompare(nameB);
      } else if (order === 'dsc') {
        return nameB.localeCompare(nameA);
      }
    });
  }*/

  @HostListener('document:click', ['$event'])
  onClick(event: Event): void {
    if (!(event.target as HTMLElement).closest('.details') && !(event.target as HTMLElement).closest('.list')) {
      this.selected = -1;
    }
  }


}
