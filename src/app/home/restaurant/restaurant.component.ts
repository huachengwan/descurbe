import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.scss']
})
export class RestaurantComponent implements OnInit {
  title = 'ThaiWok';
  subtitle = 'Sucursal Plaza Sevilla';
  constructor() { }

  ngOnInit() {
  }

}
