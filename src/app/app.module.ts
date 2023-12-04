//Moduły
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SidebarModule } from 'primeng/sidebar';
import { ButtonModule } from 'primeng/button';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

//Komponenty
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { AdminComponent } from './admin/admin.component';
import { ConferenceComponent } from './conference/conference.component';
import { AddConferenceComponent } from './add-conference/add-conference.component';
import { ConferenceListComponent } from './conference-list/conference-list.component';

//serwisy
import { ConferenceService } from './conference.service';
import { SpeakerComponent } from './speaker/speaker.component';
import { AddSpeakerComponent } from './add-speaker/add-speaker.component';


@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    AdminComponent,
    ConferenceComponent,
    AddConferenceComponent,
    ConferenceListComponent,
    SpeakerComponent,
    AddSpeakerComponent
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
  providers: [ConferenceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
