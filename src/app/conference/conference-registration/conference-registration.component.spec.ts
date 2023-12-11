import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConferenceRegistrationComponent } from './conference-registration.component';

describe('ConferenceRegistrationComponent', () => {
  let component: ConferenceRegistrationComponent;
  let fixture: ComponentFixture<ConferenceRegistrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ConferenceRegistrationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConferenceRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
