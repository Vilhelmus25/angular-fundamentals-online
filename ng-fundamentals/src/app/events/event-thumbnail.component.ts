import { Component, EventEmitter, Input, Output } from '@angular/core'


// !important means, that this will not be overwritten by anything else
@Component({
    selector: 'event-thumbnail',
    templateUrl: './event-thumbnail.component.html',
    styles: [`
    .thumbnail { min-height: 210px; }
    .pad-left { margin-left: 10px; }
    .well div {color: #bbb;}
    `]
})

export class EventThumbnailComponent {
    @Input() event: any;

    getStartTimeStyle(): any {
        if (this.event && this.event.time === '8:00 am')
            return { color: '#003300', 'font-weight': 'bold' }
        return {}
    }

    // getStartTimeClass() {
    //     if (this.event && this.event.time === '8:00 am')
    //         return ['green, bold'];
    //     return [];
    // }
    // @Output() eventClick = new EventEmitter();

    // handleClickMe() {
    //     this.eventClick.emit(this.event.name);
    // }
}