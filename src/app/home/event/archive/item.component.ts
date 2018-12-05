import { Component, OnInit, Input } from '@angular/core';
import { ItemOfEvent } from '../../../service/item-of-event';

@Component({
  selector: 'app-event-archive-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss'],
})
export class EventArchiveItemComponent implements OnInit {

  constructor() { }

  @Input() item: ItemOfEvent;

  ngOnInit() {
  }
}
