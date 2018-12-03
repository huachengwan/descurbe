import { Component, OnInit } from '@angular/core';
import { ItemOfAntros } from '../service/item-of-antros';
import { ArticleService } from '../service/article.service';

@Component({
  selector: 'app-home-antros',
  template: `
  <div class="container-fluid px-0 pb-5">
    <div class="container">
      <div class="row">
        <div class="col">
          <h1 class="title">
            <font style="vertical-align: inherit;">
              <font style="vertical-align: inherit;">ANTROS Y BARES </font>
            </font>
            <button class="btn_seeAll">
              <font style="vertical-align: inherit;">
                <font style="vertical-align: inherit;">See All&gt;</font>
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
    width: 20%; height: 30px;
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
    top: calc(50% - 30px);
    left: calc(50% - 12px);
  }
  `]
})
export class HomeAntrosComponent implements OnInit {
  items: ItemOfAntros[];

  constructor(
    articleService: ArticleService
  ) {
    this.items = articleService.getAntros();
  }

  ngOnInit() {
  }

}
