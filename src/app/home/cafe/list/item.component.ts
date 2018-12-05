import { Component, OnInit, Input } from '@angular/core';
import { ItemOfEvent } from '../../../service/item-of-event';

@Component({
  selector: 'app-cafe-list-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class CafeListItemComponent implements OnInit {

  constructor() { }

  @Input() item: ItemOfEvent;

  ngOnInit() {
  }

}
