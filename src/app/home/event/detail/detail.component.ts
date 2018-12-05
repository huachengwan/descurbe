import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-event-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class EventDetailComponent implements OnInit {

  constructor(
    private route: ActivatedRoute
  ) {
    console.log(route.snapshot.params['link']);
   }

  ngOnInit() {
  }

}
