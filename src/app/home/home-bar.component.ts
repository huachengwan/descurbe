import { Component, OnInit } from '@angular/core';
import { ItemOfBar } from '../service/item-of-bar';
import { ArticleService } from '../service/article.service';

@Component({
  selector: 'app-home-bar',
  template: `
  <div class="container-fluid">
    <div class="container">
      <div class="row">
        <div class="col">
          <h1 class="title">
            <font style="vertical-align: inherit;">
              <font style="vertical-align: inherit;">ANTROS Y BARES </font>
            </font>
            <button class="btn_seeAll">
              <font style="vertical-align: inherit;">
                <font style="vertical-align: inherit;">Siguiente&gt;</font>
              </font>
            </button>
          </h1>
        </div>
      </div>
      <div class="row">
        <div *ngFor="let item of items" class="col-md-4 card-image ng-star-inserted">
          <div class="img-container px-0" tabindex="0">
            <div class="title">
              <font style="vertical-align: inherit;">
                <font style="vertical-align: inherit;">{{item.title}}</font>
              </font>
            </div>
            <button class="btn_more" tabindex="0">
              <font style="vertical-align: inherit;">
                <font style="vertical-align: inherit;">See more&gt;</font>
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
    background: rgb(0, 0, 0);
    padding-left: 8%; padding-right:8%; padding-top:2%;
  }
  .card-image {
    padding-bottom: 3%;
  }
  .img-container {
    position: relative;
  }
  .title {
    color: rgb(255, 255, 255);
    font-size: 40px;
    font-family: Oswald;
  }
  .btn_seeAll {
    background-color: rgb(0, 0, 0);
    border: 0;
    margin-top:10px;
    cursor: pointer;
    float: right;
    color: rgb(255, 255, 255);
    font-size: 20px;
    font-family: Oswald;
  }
  .btn_seeAll:hover {
    background-color: rgb(14, 139, 47);
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
export class HomeBarComponent implements OnInit {
  items: ItemOfBar[];

  constructor(
    articleService: ArticleService
  ) {
    this.items = articleService.getBars();
  }

  ngOnInit() {
  }

}
