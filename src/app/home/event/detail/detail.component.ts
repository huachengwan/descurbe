import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ArticleService } from '../../../service/article.service';
import { ItemOfEvent } from '../../../service/item-of-event';

@Component({
  selector: 'app-event-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class EventDetailComponent implements OnInit {
  itemData: ItemOfEvent;
  constructor(
    private route: ActivatedRoute,
    private articleService: ArticleService
  ) {
    let link = '/event/'+route.snapshot.params['link'];
    this.itemData = articleService.getOneEvent(link);
  }

  ngOnInit() {
  }

}
