import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../../../service/article.service';
import { ItemOfEvent } from '../../../service/item-of-event';

@Component({
  selector: 'app-cafe-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class CafeListComponent implements OnInit {
  items: ItemOfEvent[];
  constructor(
    articleService: ArticleService
  ) { 
    this.items = articleService.getEvents();
  }

  ngOnInit() {
  }

}
