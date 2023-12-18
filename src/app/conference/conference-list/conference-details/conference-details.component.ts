import { Component, Input, Output } from '@angular/core';
import { CommonModule  } from '@angular/common';
import { Conference } from '../../conference';

@Component({
  selector: 'app-conference-details',
  templateUrl: './conference-details.component.html',
  styleUrl: './conference-details.component.css'
})
export class ConferenceDetailsComponent {
  @Input() conferences: Conference[] = [];
  @Input() selected: number = -1;

  
}
