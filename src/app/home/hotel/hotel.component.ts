import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hotel',
  templateUrl: './hotel.component.html',
  styleUrls: ['./hotel.component.scss']
})
export class HotelComponent implements OnInit {
  title = 'Enterprise Inn';
  subtitle = '(Leave this space for subtities)';
  lat: number = 51.678418;
  lng: number = 7.809007;
  
  constructor() { 
    const flexSlider = require('../../../assets/js/flex-slider/flex-slider');
    flexSlider();
  }

  ngOnInit() {
  }

}
