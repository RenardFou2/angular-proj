//Moduły
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SidebarModule } from 'primeng/sidebar';
import { ButtonModule } from 'primeng/button';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { FilterConferencesPipe } from './conference/conference-list/filter-conferences.pipe';

//Komponenty
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { AdminComponent } from './admin/admin.component';
import { AddConferenceComponent } from './conference/add-conference/add-conference.component';
import { ConferenceListComponent } from './conference/conference-list/conference-list.component';
import { AddSpeakerComponent } from './speaker/add-speaker/add-speaker.component';
import { ConferenceDetailsComponent } from './conference/conference-list/conference-details/conference-details.component';
import { ConferenceRegistrationComponent } from './conference/conference-registration/conference-registration.component';
import { SpeakerAdminListComponent } from './speaker/speaker-admin-list/speaker-admin-list.component';

//serwisy
import { ConferenceService } from './conference/conference.service';
import { SpeakerService } from './speaker/speaker.service';
import { SpeakerAdminListDetailsComponent } from './speaker/speaker-admin-list/speaker-admin-list-details/speaker-admin-list-details.component';
import { TextColourDirective } from './text-colour.directive';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    AdminComponent,
    AddConferenceComponent,
    ConferenceListComponent,
    AddSpeakerComponent,
    ConferenceDetailsComponent,
    ConferenceRegistrationComponent,
    SpeakerAdminListComponent,
    SpeakerAdminListDetailsComponent,
    FilterConferencesPipe,
    TextColourDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SidebarModule,
    ButtonModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [ConferenceService, SpeakerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
