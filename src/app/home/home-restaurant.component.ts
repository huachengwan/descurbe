import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../service/article.service';
import { ItemOfRestaurant } from '../service/item-of-restaurant';

class Item {
  title: string;
  link: string;
  image_file: string;
}
@Component({
  selector: 'app-home-restaurant',
  template: `
  <div class="container-fluid">
    <div class="container">
      <div class="row">
        <div class="col">
          <h1 class="title">
            <font style="vertical-align: inherit;">
              <font style="vertical-align: inherit;">RESTAURANTS </font>
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
          <div class="img-container" tabindex="0">
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
    background: rgb(250, 123, 10);
    padding-left: 8%; padding-right:8%; padding-top:2%;
  }
  .card-image {
    padding-bottom: 3%;
    width: 100%;
  }
  .title {
    color: rgb(255, 255, 255);
    font-size: 40px;
    font-family: Oswald;
  }
  .btn_seeAll {
    background-color: rgb(250, 123, 10);
    border: 0;
    margin-top: 10px;
    cursor: pointer;
    width: 20%; height: 30px;
    color: rgb(255, 255, 255);
    font-size: 20px;
    font-family: Oswald;
    float: right;
  }
  .btn_seeAll:hover {
    background-color: rgb(14, 139, 47);
  }
  .topic {
  }
  .img-container {
    position: relative;
    width: 100%;
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
    left: calc(50% - 36px);
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
export class HomeRestaurantComponent implements OnInit {
  items: ItemOfRestaurant[];

  constructor(
    articleService: ArticleService
  ) { 
    this.items = articleService.getRestaurants();
  }

  ngOnInit() {
  }

}
