import { Component, Input, Output } from '@angular/core';
import { CommonModule  } from '@angular/common';
import { Speaker } from '../../speaker';

@Component({
  selector: 'app-speaker-admin-list-details',
  templateUrl: './speaker-admin-list-details.component.html',
  styleUrl: './speaker-admin-list-details.component.css'
})
export class SpeakerAdminListDetailsComponent {
  @Input() speakers: Speaker[] = [];
  @Input() selected: number = -1;
}
