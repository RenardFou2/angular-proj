import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConferenceDetailsComponent } from './conference-details.component';

describe('ConferenceDetailsComponent', () => {
  let component: ConferenceDetailsComponent;
  let fixture: ComponentFixture<ConferenceDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ConferenceDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConferenceDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
