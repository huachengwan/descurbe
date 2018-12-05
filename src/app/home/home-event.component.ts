import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { ArticleService } from '../service/article.service';
import { ItemOfEvent } from '../service/item-of-event';

@Component({
  selector: 'app-home-event',
  template: `
    <div class="container-fluid">
      <div class="container">
        <div class="row">
          <div class="topic">
            <h1 class="">
              <font style="vertical-align: inherit;">
                <font style="vertical-align: inherit;">QUÉ HACER HOY EN LEÓN?</font>
              </font>
            </h1>
          </div>
        </div>
        <div class="row">
          <div class="button col-3">
            <button class="btn_previous d-block d-md-none">
              <font style="vertical-align: inherit;">
                <font style="vertical-align: inherit;">&gt;</font>
              </font>
            </button>
            <button class="btn_previous d-none d-md-block">
              <font style="vertical-align: inherit;">
                <font style="vertical-align: inherit;">&lt;Anterior</font>
              </font>
            </button>
          </div>
          <div class="col-6 date">
            <font style="vertical-align: inherit;">
              <font style="vertical-align: inherit;">Viernes 19 de Enero de 2019</font>
            </font>
          </div>
          <div class="button col-3 ">
            <button class="btn_next d-block d-md-none">
              <font style="vertical-align: inherit;">
                <font style="vertical-align: inherit;">&gt;</font>
              </font>
            </button>
            <button class="btn_next d-none d-md-block">
              <font style="vertical-align: inherit;">
                <font style="vertical-align: inherit;">Siguiente&gt;</font>
              </font>
            </button>
          </div>
        </div>
        <div class="row">
          <div *ngFor="let item of items;let i=index" class="col-md-4 card-image">
            <div class="img-container" routerlink="/agenda" tabindex="0" (mouseenter)="showMoreBtn(i)" (mouseleave)="hideMoreBtn(i)">
              <div class="title">
                <font style="vertical-align: inherit;">
                  <font style="vertical-align: inherit;">{{item.title}}</font>
                </font>
              </div>
              <button class="btn_more" routerlink="/agenda" tabindex="0" [@moreBtn]="i==itemIndex?btnStatus:'hide'">
                Ver más&nbsp;&gt;
              </button>
              <img class="img-fluid" src="{{item.image_file}}">
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .container-fluid {
      padding-left: 8%; padding-right:8%; padding-top:2%;
    }
    .card-image {
      padding-bottom: 3%;
    }
    .img-container {
      position: relative;
      overflow: hidden;
    }
    .img-container .title {
      position: absolute;
      left: 0; top: 0;
      background-color: rgba(0,0,0,0.5);
      font-size: 20px; color: #fff;
    }
    .img-container .btn_more {
      position: absolute;
      top: 100%; left: calc(50% - 56px);
      background-color: rgb(14, 139, 47);
      color: rgb(255, 255, 255);
      cursor: pointer;
      font-size: 20px; font-family: Oswald;
      border: none;
    }
    .btn_next {
      background-color: rgb(232, 234, 233);
      cursor: pointer;
      display: block;
      font-size: 20px;
      font-family: Oswald;
      width: 100%; height:100%;
      border: none;
    }
    .btn_next:hover {
      background-color: rgb(14, 139, 47);
    }
    .btn_previous {
      background-color: rgb(232, 234, 233);
      cursor: pointer;
      display: block;
      font-size: 20px;
      font-family: Oswald;
      width: 100%; height:100%;
      border: none;
    }
    .btn_previous:hover {
      background-color: rgb(14, 139, 47);
    }
    .button {
      margin-bottom: 1%
    }
    .date {
      background-color: rgb(232, 234, 233);
      text-align: center;
      display: block;
      font-size: 20px;
      font-family: Oswald;
      width: 100%; height:100%;
      margin-bottom: 1%;
    }
    .img-fluid {
      width: 100%;
    }
    
  `],
  animations: [
    trigger('moreBtn', [
      state('show', style({
        top: 'calc(50% - 15px)',
        opacity: 1
      })),
      state('hide', style({
        top: '100%',
        opacity: 0
      })),
      transition('hide => show', [
        animate('0.3s')
      ]),
      transition('show => hide', [
        animate('0.2s')
      ])
    ])
  ]
})
export class HomeEventComponent implements OnInit {
  items: ItemOfEvent[];
  constructor(
    articleService: ArticleService
  ) {
    this.items = articleService.getEvents();
  }

  ngOnInit() {
  }

  itemIndex = -1;
  btnStatus = 'hide';  
  showMoreBtn(index) {
    this.itemIndex = index;
    this.btnStatus = 'show';
  }

  hideMoreBtn(index) {
    this.itemIndex = index;
    this.btnStatus = 'hide';
  }

}


