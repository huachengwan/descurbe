import { Component, OnInit, SystemJsNgModuleLoader } from '@angular/core';

@Component({
  selector: 'app-restaurant-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class RestaurantItemComponent implements OnInit {
  lat: number = 51.678418;
  lng: number = 7.809007;
  
  constructor() { 
    const flexSlider = require('../../../assets/js/flex-slider/flex-slider');
    flexSlider();
  }

  ngOnInit() {
  }

}
