import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../service/article.service';
import { ItemOfQue } from '../service/item-of-que';

@Component({
  selector: 'app-home-que',
  template: `
  <div class="container">
    <div class="row">
      <div class="col">
        <h1 class="">
          <font style="vertical-align: inherit;">
            <font style="vertical-align: inherit;">¿QUÉ HACER HOY EN LEÓN?</font>
          </font>
        </h1>
      </div>
    </div>
    <div class="row">
      <div class="col-md-3">
        <button class="btn_quehacer_anterior d-block d-md-none">
          <font style="vertical-align: inherit;">
            <font style="vertical-align: inherit;">&gt;</font>
          </font>
        </button>
        <button class="btn_quehacer_anterior d-none d-md-block">
          <font style="vertical-align: inherit;">
            <font style="vertical-align: inherit;">&lt;Previous</font>
          </font>
        </button>
      </div>
      <div class="col-md-6">
        <font style="vertical-align: inherit;">
          <font style="vertical-align: inherit;">Sunday, December 2, 2018</font>
        </font>
      </div>
      <div class="col-md-3 ">
        <button class="btn_quehacer_anterior d-block d-md-none">
          <font style="vertical-align: inherit;">
            <font style="vertical-align: inherit;">&gt;</font>
          </font>
        </button>
        <button class="btn_quehacer_anterior d-none d-md-block">
          <font style="vertical-align: inherit;">
            <font style="vertical-align: inherit;">Next&gt;</font>
          </font>
        </button>
      </div>
    </div>
    <div class="row">
      <div *ngFor="let item of items" class="col-md-4 card-quehacerhoy">
        <div class="img-container px-0" routerlink="/agenda" tabindex="0">
          <div class="title">
            <font style="vertical-align: inherit;">
              <font style="vertical-align: inherit;">{{item.title}}</font>
            </font>
          </div>
          <button class="btn_more" routerlink="/agenda" tabindex="0">
            <font style="vertical-align: inherit;">
              <font style="vertical-align: inherit;">See more&gt;</font>
            </font>
          </button>
          <img class="img-fluid" src="{{item.image_file}}">
        </div>
      </div>
    </div>
  </div>
  `,
  styles: [`
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
    top: calc(50% - 30px);
    left: calc(50% - 12px);
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
