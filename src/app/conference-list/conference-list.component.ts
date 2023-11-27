import { Component, HostListener } from '@angular/core';
import { ConferenceComponent } from '../conference/conference.component';
import { ConferenceService } from '../conference.service';

@Component({
  selector: 'app-conference-list',
  templateUrl: './conference-list.component.html',
  styleUrl: './conference-list.component.css'
})
export class ConferenceListComponent {
  conferences: ConferenceComponent[];
  selected: number;

  constructor(private conferenceService: ConferenceService) {
    this.conferences = this.conferenceService.getConferences();
    this.selected = -1;
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

  formatDate(date: Date): string {
    return date.toLocaleDateString();
  }
}
