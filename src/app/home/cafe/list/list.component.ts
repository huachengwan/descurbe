import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../../../service/article.service';
import { ItemOfCafe } from '../../../service/item-of-cafe';

@Component({
  selector: 'app-cafe-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class CafeListComponent implements OnInit {
  items: ItemOfCafe[];
  constructor(
    articleService: ArticleService
  ) { 
    this.items = articleService.getCafes();
  }

  ngOnInit() {
  }

}
