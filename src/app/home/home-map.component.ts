import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-map',
  templateUrl: './home-map.component.html',
  styles: [`
    agm-map {
      height: 300px;
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
