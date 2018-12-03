import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../service/article.service';
import { ItemOfArticulos } from '../service/item-of-articulos';


@Component({
  selector: 'app-home-articulos',
  template: `
  <div class="container-fluid">
    <div class="container">
      <div class="row">
        <div class="col">
          <h1 class="h1_subt_mainpage">
            <font style="vertical-align: inherit;">
              <font style="vertical-align: inherit;">ARTICULOS </font>
            </font>
          </h1>
        </div>
      </div>
      <div class="row">
        <div *ngFor="let item of items" class="col-md-3 card-quehacerhoy ng-star-inserted">
          <div class="img-container px-0" tabindex="0">
            <img class="img-fluid" src="{{item.image_file}}">
          </div>
          <div>
            <p>
              {{item.title}}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  `,
  styles: [`
  .container-fluid {
    background: rgb(232, 233, 233);
  }
  .container {
    padding-left: 8%; padding-right:8%; padding-top:2%;
  }
  `]
})
export class HomeArticulosComponent implements OnInit {
  items: ItemOfArticulos[];

  constructor(
    articleService: ArticleService
  ) { 
    this.items = articleService.getArticulos();
  }

  ngOnInit() {
  }

}
