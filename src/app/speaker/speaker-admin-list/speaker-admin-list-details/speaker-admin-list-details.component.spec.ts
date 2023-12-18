import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpeakerAdminListDetailsComponent } from './speaker-admin-list-details.component';

describe('SpeakerAdminListDetailsComponent', () => {
  let component: SpeakerAdminListDetailsComponent;
  let fixture: ComponentFixture<SpeakerAdminListDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SpeakerAdminListDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SpeakerAdminListDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
