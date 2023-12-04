import { Component } from '@angular/core';
import { Inject } from '@angular/core';

@Component({
  selector: 'app-speaker',
  templateUrl: './speaker.component.html',
  styleUrl: './speaker.component.css'
})
export class SpeakerComponent {

  private id: number;
  private name: string;
  private lastName: string;
  private DOB: Date;
  private email: string;

  constructor(@Inject(Number) id: number, @Inject(String) name: string, @Inject(String) lastName: string, @Inject(Date) DOB: Date, @Inject(String) email: string) {
    this.id = id;
    this.name = name;
    this.lastName = lastName;
    this.DOB = DOB;
    this.email = email;
  }

  getId() : Number{
    return this.id;
  }
  getName() : string {
    return this.name;
  }
  getLName() : string {
    return this.lastName;
  }
  getDOB() : Date {
    return this.DOB;
  }
  getEmail() : string {
    return this.email;
  }
}
