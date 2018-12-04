import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-archive-item',
  template: `
    <div class="row card-agenda ng-star-inserted">
      <div class="d-none d-lg-block col-lg-2 pl-0">
        <div class="div-agenda-little-box ng-star-inserted">
          <span class="div-agenda-little-box-t1">
            From 
          </span>
          <span class="div-agenda-little-box-t2">
            7:00 
          </span>
          <span class="div-agenda-little-box-t3">
            AM.
          </span>
        </div>
      </div>
      <div class="col-12 d-block d-lg-none text-center">
        <span class="span-responsive-agenda-little-text ng-star-inserted">
          From 7:00 AM.
        </span>
      </div>
      <div class="col-12 col-lg-5 img-container px-0">
        <div class="evento-img-label" style="background-color: rgba(250, 123, 10, 0.8);">
            Restaurants
        </div>
        <img class="img-fluid" src="assets/img/descubreleon/agenda/noviembre_files/rest_elfaro-desayuno.jpg">
      </div>
      <div class="col-12 col-lg-5 body cuerpo-text-card-container">
        <div class="ctcc_1">
          <h4>
            2x1 buffet breakfast at El Faro restaurant
          </h4>
          <div class="subtitle">
            of the Hotel Enterprise Inn
          </div>
        </div>
        <div class="ctcc_2">
          <div class="cuerpo-text-card">
            Do not forget to try their delicious bread fresh out of the oven
          </div>
        </div>
        <div class="ctcc_3 text-right">
          <button class="btn_agenda_miniaction ng-star-inserted">
            <i class="fa fa-calendar">

            </i>
              Schedule
          </button>
          <button class="btn_agenda_miniaction ng-star-inserted" tabindex="0">
            See more&gt;
          </button>
        </div>
      </div>
    </div>

  `,
  styles: [`
    
  `]
})
export class EventArchiveItemComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
