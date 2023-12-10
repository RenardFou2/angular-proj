import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSpeakerComponent } from './add-speaker.component';

describe('AddSpeakerComponent', () => {
  let component: AddSpeakerComponent;
  let fixture: ComponentFixture<AddSpeakerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddSpeakerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddSpeakerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
