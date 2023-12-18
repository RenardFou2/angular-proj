import { Component, HostListener } from '@angular/core';
import { Speaker } from '../speaker';
import { SpeakerService } from '../speaker.service';
@Component({
  selector: 'app-speaker-admin-list',
  templateUrl: './speaker-admin-list.component.html',
  styleUrl: './speaker-admin-list.component.css'
})
export class SpeakerAdminListComponent {
  
  speakers: Speaker[];
  selected: number;
  sortOrder: 'asc' | 'dsc' = 'asc';

  constructor(private speakerService: SpeakerService) {
    this.speakers = this.speakerService.getSpeakers();
    this.selected = -1;
  }

  get sortedSpeakers(): Speaker[] {
    return this.speakerService.sortSpeakersByName(this.sortOrder);
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
