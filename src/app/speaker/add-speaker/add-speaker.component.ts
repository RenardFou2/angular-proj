import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { Speaker } from '../speaker';
import { SpeakerService } from '../speaker.service';

@Component({
  selector: 'app-add-speaker',
  templateUrl: './add-speaker.component.html',
  styleUrl: './add-speaker.component.css'
})
export class AddSpeakerComponent {
  
  speakerForm: FormGroup;

  constructor(private fb: FormBuilder, private speakerService: SpeakerService) {
    this.speakerForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      lastName: ['', [Validators.required, Validators.minLength(3)]],
      dob: [null, [Validators.required, this.dateValidator]],
      email: ['', [Validators.required, Validators.email]]
    });
  }

  dateValidator(control: AbstractControl) {
    const selectedDate = new Date(control.value);
    const currentDate = new Date();

    return selectedDate <= currentDate ? null : { pastDate: true };
  }
  
  addSpeaker() {
    if (this.speakerForm.valid) {
      const newSpeaker = new Speaker(
        this.speakerService.getSpeakers().length+1,
        this.speakerForm.value.name,
        this.speakerForm.value.lastName,
        this.speakerForm.value.dob,
        this.speakerForm.value.email,
      );

      this.speakerService.addSpeaker(newSpeaker);
      }
      this.speakerForm.reset();
    }
}
