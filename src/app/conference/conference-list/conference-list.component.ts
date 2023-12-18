import { Component, HostListener } from '@angular/core';
import { Conference } from '../conference';
import { ConferenceService } from '../conference.service';

@Component({
  selector: 'app-conference-list',
  templateUrl: './conference-list.component.html',
  styleUrl: './conference-list.component.css'
})
export class ConferenceListComponent {
  
  conferences: Conference[];
  selected: number;
  sortOrder: 'asc' | 'dsc' = 'asc';
  searchTerm: string = '';

  constructor(private conferenceService: ConferenceService) {
    this.conferences = this.conferenceService.getConferences();
    this.selected = -1;
  }

  get sortedConferences(): Conference[] {
    return this.conferenceService.sortConferencesByName(this.sortOrder);
  }

  select(which: number): void {
    this.selected = which;
  }


  @HostListener('document:click', ['$event'])
  onClick(event: Event): void {
    if (!(event.target as HTMLElement).closest('.details') && !(event.target as HTMLElement).closest('.list')) {
      this.selected = -1;
    }
  }


}
