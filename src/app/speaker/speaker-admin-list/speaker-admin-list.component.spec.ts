import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SpeakerAdminListComponent } from './speaker-admin-list.component';

describe('SpeakerAdminListComponent', () => {
  let component: SpeakerAdminListComponent;
  let fixture: ComponentFixture<SpeakerAdminListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SpeakerAdminListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SpeakerAdminListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
