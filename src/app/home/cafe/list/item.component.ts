import { Component, OnInit, Input } from '@angular/core';
import { ItemOfCafe } from '../../../service/item-of-cafe';

@Component({
  selector: 'app-cafe-list-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class CafeListItemComponent implements OnInit {

  constructor() { }

  @Input() item: ItemOfCafe;

  ngOnInit() {
  }

}
