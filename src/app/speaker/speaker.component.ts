import { Component } from '@angular/core';
import { Inject } from '@angular/core';

@Component({
  selector: 'app-speaker',
  templateUrl: './speaker.component.html',
  styleUrl: './speaker.component.css'
})
export class SpeakerComponent {

  private name: string;
  private lastName: string;
  private DOB: Date;
  private email: string;

  constructor(@Inject(String) name: string, @Inject(String) lastName: string, @Inject(Date) DOB: Date, @Inject(String) email: string) {
    this.name = name;
    this.lastName = lastName;
    this.DOB = DOB;
    this.email = email;
  }

  getName() : string {
    return this.name;
  }
  getDOB() : Date {
    return this.DOB;
  }
  getEmail() : string {
    return this.email;
  }
}
