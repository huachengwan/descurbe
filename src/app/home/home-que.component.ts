import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../service/article.service';
import { ItemOfQue } from '../service/item-of-que';

@Component({
  selector: 'app-home-que',
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
        <div *ngFor="let item of items" class="col-md-4 card-image">
          <div class="img-container" routerlink="/agenda" tabindex="0">
            <div class="title">
              <font style="vertical-align: inherit;">
                <font style="vertical-align: inherit;">{{item.title}}</font>
              </font>
            </div>
            <button class="btn_more" routerlink="/agenda" tabindex="0">
              <font style="vertical-align: inherit;">
                <font style="vertical-align: inherit;">Ver más&gt;</font>
              </font>
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
  }
  .img-container .title {
    position: absolute;
    left: 0; top: 0;
    background-color: rgba(0,0,0,0.5);
    font-size: 20px; color: #fff;
  }
  .img-container .btn_more {
    position: absolute;
    top: calc(50% - 15px);
    left: calc(50% - 56px);
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
  .btn_more {
    background-color: rgb(14, 139, 47);
    color: rgb(255, 255, 255);
    cursor: pointer;
    font-size: 20px;
    font-family: Oswald;
    border: none;
  }
  .img-fluid {
    width: 100%;
  }
  `]
})
export class HomeQueComponent implements OnInit {
  items: ItemOfQue[];

  constructor(
    articleService: ArticleService
  ) {
    this.items = articleService.getQue();
  }

  ngOnInit() {
  }

}


