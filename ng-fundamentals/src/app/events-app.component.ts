import { Component } from '@angular/core';

@Component({
  selector: 'events-app',
  template: `
  <nav-bar></nav-bar>
  <events-list-component></events-list-component>`
})
export class EventsAppComponent {
  title = 'app';
}
