import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-slider',
  templateUrl: './home-slider.component.html',
  styles: [`
    .title{
      font-size: 3.21em; font-weight: bold;
    }
  `]
})
export class HomeSliderComponent implements OnInit {

  constructor() {
    const homeSlider = require('../../assets/js/swipe-slider/slider2');
    homeSlider();
  }

  ngOnInit() {
  }

}