import { Component, OnInit, Input } from '@angular/core';
import { ItemOfEvent } from '../../../service/item-of-event';

@Component({
  selector: 'app-event-archive-item',
  template: `
    <div>
      <div class="row box">
        <div class="d-none d-lg-block col-lg-2">
          <div class="timebox">
            <span class="timeFrom">
              From 
            </span>
            <span class="timeTime">
              {{item.time}} 
            </span>
            <span class="timeAMPM">
              AM.
            </span>
          </div>
        </div>
        <div class="col-12 d-block d-lg-none text-center">
          <span class="span-responsive-agenda-little-text">
            From 7:00 AM.
          </span>
        </div>
        <div class="col-12 col-lg-5 img-container px-0">
          <div class="title" style="background-color: rgba(250, 123, 10, 0.8);">
            Restaurants
          </div>
          <img class="img-fluid" src="{{item.image_file}}">
        </div>
        <div class="col-12 col-lg-5 archiveContent">
          <div class="mainTitle">
            <h4>
              {{item.title}} 
            </h4>
            <div class="subTitle">
              of the Hotel Enterprise Inn
            </div>
          </div>
          <div class="content">
            <div class="">
              {{item.short_desc}}
            </div>
          </div>
          <div class="ctcc_3 text-right">
            <button class="btn_schedule">
              <i class="fa fa-calendar"></i>
              Schedule
            </button>
            <button class="btn_seeall" tabindex="0">
              See more&gt;
            </button>
          </div>
        </div>
      </div>
    </div>

  `,
  styles: [`
  .timebox {
    padding: 5%;
    background-color: rgb(233, 233, 233);
  }
  .timeTime {
    font-size: 30px;
    display: block;
    font-weight: bold;
  }
  .timeFrom {
    font-size: 13px;
    display: block;
  }
  .timeAMPM {
    font-size: 13px;
    display: block;
    font-weight: bold;
  }
  .box{
    padding-left: 7%;
    margin-top: 2%;
  }
  .img-container .title {
    position: absolute;
    left: 0; top: 0;
    background-color: rgba(0,0,0,0.5);
    font-size: 20px; color: #fff;
  }
  .archiveContent {
    padding: 3%;
  }
  .content {
    height: 40%;
    overflow: hidden;
  }
  .archiveContent {
    background-color: rgb(233, 233, 233)
  }
  button {
    border: none;
    background-color: rgb(176, 176, 176);
    padding-right:5%; padding-left:5%; padding-top: 2%;padding-bottom: 2%;
    margin-right: 2%;
    color: rgb(255, 255, 255);
  }
  `]
})
export class EventArchiveItemComponent implements OnInit {

  constructor() { }

  @Input() item: ItemOfEvent;

  ngOnInit() {
  }

}
