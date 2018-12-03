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
  <div class="container-fluid px-0 pb-5">
    <div class="container">
      <div class="row">
        <div class="col">
          <h1 class="h1_subt_mainpage">
            <font style="vertical-align: inherit;">
              <font style="vertical-align: inherit;">RESTAURANTS </font>
            </font>
            <button class="btn_vertodos">
              <font style="vertical-align: inherit;">
                <font style="vertical-align: inherit;">See All&gt;</font>
              </font>
            </button>
          </h1>
        </div>
      </div>
      <div class="row">
        <div *ngFor="let item of items" class="col-md-4 card-restaurante ng-star-inserted">
          <div class="img-container px-0" tabindex="0">
            <div class="restaurante-img-label">
              <font style="vertical-align: inherit;">
                <font style="vertical-align: inherit;">{{item.title}}</font>
              </font>
            </div>
            <button class="btn_vermas" tabindex="0">
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
