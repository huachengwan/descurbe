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

  constructor() { }

  ngOnInit() {

  }

  ngAfterContentInit() {
  }

}
