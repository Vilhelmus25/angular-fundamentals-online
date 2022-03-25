import { Component, OnInit } from '@angular/core';
import { EventService } from './shared/event.service';
import { ToastrService } from '../common/toastr.service';
import { ActivatedRoute } from '@angular/router';

declare let toastr: { success: (arg0: any) => void; };

@Component({
  templateUrl: './events-list-component.html',
})
export class EventsListComponent implements OnInit {

  // handleEventClicked(data: any) {
  //   console.log('received: ', data);
  // }
  events: any;

  constructor(private eventsService: EventService, private toastr: ToastrService, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.events = this.route.snapshot.data['events'];   // ./routes - events
  }

  handleThumbnailClick(eventName: any) {
    this.toastr.success(eventName)

  }


}
