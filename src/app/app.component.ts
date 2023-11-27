import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-proj';

  sidebarVisible: boolean;

  toggleSidebar() {
    this.sidebarVisible = !this.sidebarVisible;
    console.log(this.sidebarVisible);
  }
  
  constructor() { 
    this.sidebarVisible = false;
  }
}