import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import {ActivatedRoute } from '@angular/router';
import { Conference } from '../conference';
import { ConferenceService } from '../conference.service';
import { Attendee } from '../../attendee/attendee';

@Component({
  selector: 'app-conference-registration',
  templateUrl: './conference-registration.component.html',
  styleUrl: './conference-registration.component.css'
})
export class ConferenceRegistrationComponent {
  
  registrationForm: FormGroup;
  conferences: Conference[] = [];
  conferenceId: String = '';

  constructor(private fb: FormBuilder, private conferenceService: ConferenceService, private route: ActivatedRoute ) {
    this.registrationForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      LastName: ['', [Validators.required, Validators.minLength(3)]],
      dob: [null, [Validators.required, this.ageValidator]],
      email: ['', [Validators.required, Validators.email]]
    });
    this.conferences = conferenceService.getConferences();
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      console.log('ID wyświetlanej konferencji:', id);
      this.conferenceId = id !== null ? id : '';
    });
  }

  ageValidator(control: AbstractControl) {
    const birthDate = new Date(control.value);
    const currentDate = new Date();

    const age = currentDate.getFullYear() - birthDate.getFullYear();

    return age >= 18 ? null : { nonAdult: true };
  }

  addUser() {

    if (this.registrationForm.valid) {

      let foundConference: Conference | undefined;
      for (const conference of this.conferences) {
        if (String(conference?.getId()) === this.conferenceId) {
          foundConference = conference;
          break;
        }
      }

      const newAttendee = new Attendee(
        this.registrationForm.value.name,
        this.registrationForm.value.lastName,
        this.registrationForm.value.dob,
        this.registrationForm.value.email,
      );
      foundConference?.getAttendees().push(newAttendee);
    }
    this.registrationForm.reset();
    }

}
