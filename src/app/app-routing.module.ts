import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { UserComponent } from './user/user.component';
import { ConferenceRegistrationComponent } from './conference/conference-registration/conference-registration.component';
import { AddConferenceComponent } from './conference/add-conference/add-conference.component';

const routes: Routes = [
  { path: 'admin', component: AdminComponent },
  { path: 'user', component: UserComponent },
  { path: 'conference/create',component: AddConferenceComponent },
  { path: 'conference/:id/register',component: ConferenceRegistrationComponent },
  { path: '', redirectTo: '/user', pathMatch: 'full' }, // Default
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
