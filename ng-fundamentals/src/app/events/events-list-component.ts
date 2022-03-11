import { Component, OnInit } from '@angular/core';
import { EventService } from './shared/event.service';
import { ToastrService } from '../common/toastr.service';

declare let toastr: { success: (arg0: any) => void; };

@Component({
  selector: 'events-list-component',
  templateUrl: './events-list-component.html',
})
export class EventsListComponent implements OnInit {

  // handleEventClicked(data: any) {
  //   console.log('received: ', data);
  // }
  events: any[] | undefined;

  constructor(private eventsService: EventService, private toastr: ToastrService) {
  }

  ngOnInit(): void {
    this.events = this.eventsService.getEvents()

  }

  handleThumbnailClick(eventName: any) {
    this.toastr.success(eventName)

  }


}
