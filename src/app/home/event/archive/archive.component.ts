import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../../../service/article.service';
import { ItemOfEvent } from '../../../service/item-of-event';

@Component({
  selector: 'app-event-archive',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.scss']
})
export class EventArchiveComponent implements OnInit {
  items: ItemOfEvent[];
  constructor(
    articleService: ArticleService
  ) { 
    this.items = articleService.getEvents();
  }

  ngOnInit() {
  }

}
