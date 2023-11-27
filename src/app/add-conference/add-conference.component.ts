import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { ConferenceComponent } from '../conference/conference.component';
import { ConferenceService } from '../conference.service';

@Component({
  selector: 'app-add-conference',
  templateUrl: './add-conference.component.html',
  styleUrl: './add-conference.component.css'
})
export class AddConferenceComponent {
  
  conferenceForm: FormGroup;

  constructor(private fb: FormBuilder, private conferenceService: ConferenceService) {
    this.conferenceForm = this.fb.group({
      name: ['', Validators.required],
      date: [null, [Validators.required, this.dateValidator]],
      location: ['', Validators.required],
      attendees: [0],
      conferenceURL: [''],
      locationDetails:['']
    });
  }

  dateValidator(control: AbstractControl) {
    const selectedDate = new Date(control.value);
    const currentDate = new Date();

    return selectedDate >= currentDate ? null : { pastDate: true };
  }
  
  addConference() {
    if (this.conferenceForm.valid) {
      const newConference = new ConferenceComponent(
        this.conferenceForm.value.name,
        this.conferenceForm.value.date,
        this.conferenceForm.value.location,
        this.conferenceForm.value.attendees,
        this.conferenceForm.value.conferenceURL,
        this.conferenceForm.value.locationDetails,
      );

      this.conferenceService.addConference(newConference);
      }
      this.conferenceForm.reset();
    }
}
