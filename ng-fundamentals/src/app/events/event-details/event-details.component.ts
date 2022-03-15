import { Component } from "@angular/core";
import { EventService } from "../shared/event.service";

@Component({
    templateUrl: './event-details.component.html',
    styles: [`
    .conteiner { padding-left:20px; padding_right: 20px; }
    .event-image { height: 100px; }
    `]
})
export class EventDetailsComponent {
    event: any;
    constructor(private eventService: EventService) {

    }

    ngOnInit() {
        this.event = this.eventService.getEvent(1);
    }

}