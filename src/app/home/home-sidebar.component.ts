import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../service/article.service';
import { ItemOfArticle } from '../service/item-of-article';

@Component({
  selector: 'app-home-sidebar',
  templateUrl: './home-sidebar.component.html',
  styleUrls: ['./home-sidebar.component.scss']
})
export class HomeSidebarComponent implements OnInit {
  
  articles: ItemOfArticle[];
  
  constructor(
    articleService: ArticleService
  ) { 
    this.articles = articleService.getArticles();
  }

  ngOnInit() {
  }

}
