import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cafe',
  templateUrl: './cafe.component.html',
  styleUrls: ['./cafe.component.scss']
})
export class CafeComponent implements OnInit {

  constructor() { }

  currentDate = 'Jueves 1 Noveiembre 2019';

  ngOnInit() {
  }

}
