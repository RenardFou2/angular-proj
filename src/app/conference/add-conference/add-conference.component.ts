import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { Conference } from '../conference';
import { ConferenceService } from '../conference.service';
import { Speaker } from '../../speaker/speaker';
import { SpeakerService } from '../../speaker/speaker.service';

@Component({
  selector: 'app-add-conference',
  templateUrl: './add-conference.component.html',
  styleUrl: './add-conference.component.css'
})
export class AddConferenceComponent {
  
  conferenceForm: FormGroup;
  speakers: Speaker[] = [];

  constructor(private fb: FormBuilder, private conferenceService: ConferenceService, private speakerService: SpeakerService) {
    this.conferenceForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(5)]],
      date: [null, [Validators.required, this.dateValidator]],
      location: ['', [Validators.required, Validators.minLength(5)]],
      conferenceURL: [''],
      locationDetails:[''],
      speakerId: [0, Validators.required]
    });
    this.speakers = this.speakerService.getSpeakers();
  }

  dateValidator(control: AbstractControl) {
    const selectedDate = new Date(control.value);
    const currentDate = new Date();

    return selectedDate >= currentDate ? null : { pastDate: true };
  }
  
  addConference() {
    if (this.conferenceForm.valid) {
      
      const speakerId = this.conferenceForm.value.speakerId;
      console.log('Form Speaker ID:', speakerId);
      console.log('Speakers:', this.speakers);

      let foundSpeaker: Speaker | undefined;

      for (const speaker of this.speakers) {
        console.log('Checking Speaker:', speaker);
        console.log('Speaker ID:', speaker?.getId());
        console.log('Form Speaker ID:', speakerId);
        if (String(speaker?.getId()) === speakerId) {
          foundSpeaker = speaker;
          break;
        }
      }
      
      if(foundSpeaker){
        const newConference = new Conference(
          this.conferenceService.getConferences().length+1,
          this.conferenceForm.value.name,
          this.conferenceForm.value.date,
          this.conferenceForm.value.location,
          this.conferenceForm.value.conferenceURL,
          this.conferenceForm.value.locationDetails,
          foundSpeaker
        );
        this.conferenceService.addConference(newConference);
        this.conferenceForm.reset();
      } else {
        console.error('Speaker not found!');
      }
    }
  }
}
