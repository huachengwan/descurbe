import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-map',
  templateUrl: './home-map.component.html',
  styles: [`
    agm-map {
      height: 726px;
      @media (max-width: 767.98px) {
        height: 440px;
      }
      @media (max-width: 479.98px) {
        height: 280px;
      }
    }
  `]
})
export class HomeMapComponent implements OnInit {

  lat: number = 51.678418;
  lng: number = 7.809007;

  constructor() { }

  ngOnInit() {

  }

  ngAfterContentInit() {
  }

}
