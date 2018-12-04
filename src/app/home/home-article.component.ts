import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../service/article.service';
import { ItemOfArticle } from '../service/item-of-article';


@Component({
  selector: 'app-home-article',
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
              <p class="title">
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
      padding-left: 8%; padding-right:8%; padding-top:2%;
    }
    .title {
      font-size: 20px;
      font-family: Oswald;
    }
    .card-quehacerhoy .img-fluid {
      width: 100%;
      cursor: pointer;
    }
  `]
})
export class HomeArticleComponent implements OnInit {
  items: ItemOfArticle[];

  constructor(
    articleService: ArticleService
  ) { 
    this.items = articleService.getArticles();
  }

  ngOnInit() {
  }

}
