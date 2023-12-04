import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { ConferenceComponent } from '../conference/conference.component';
import { ConferenceService } from '../conference.service';
import { SpeakerComponent } from '../speaker/speaker.component';
import { SpeakerService } from '../speaker.service';

@Component({
  selector: 'app-add-conference',
  templateUrl: './add-conference.component.html',
  styleUrl: './add-conference.component.css'
})
export class AddConferenceComponent {
  
  conferenceForm: FormGroup;
  speakers: SpeakerComponent[] = [];

  constructor(private fb: FormBuilder, private conferenceService: ConferenceService, private speakerService: SpeakerService) {
    this.conferenceForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(5)]],
      date: [null, [Validators.required, this.dateValidator]],
      location: ['', [Validators.required, Validators.minLength(5)]],
      attendees: [0],
      conferenceURL: [''],
      locationDetails:[''],
      speakerId: [0, Validators.required]
    });
  }

  ngOnInit() {
    this.speakers = this.speakerService.getSpeakers();
  }

  dateValidator(control: AbstractControl) {
    const selectedDate = new Date(control.value);
    const currentDate = new Date();

    return selectedDate >= currentDate ? null : { pastDate: true };
  }
  
  addConference() {
    if (this.conferenceForm.valid) {
      
      let foundSpeaker: SpeakerComponent | undefined;

      for (const speaker of this.speakers) {
        if (speaker?.getId() === this.conferenceForm.value.speakerId) {
          foundSpeaker = speaker;
          break;
        }
      }
      const newConference = new ConferenceComponent(
        this.conferenceForm.value.name,
        this.conferenceForm.value.date,
        this.conferenceForm.value.location,
        this.conferenceForm.value.attendees,
        this.conferenceForm.value.conferenceURL,
        this.conferenceForm.value.locationDetails,
        foundSpeaker!
      );

      this.conferenceService.addConference(newConference);
      }
      this.conferenceForm.reset();
    }
}
