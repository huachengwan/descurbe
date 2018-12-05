import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ArticleService } from '../../../service/article.service';
import { ItemOfEvent } from '../../../service/item-of-event';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-event-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class EventDetailComponent implements OnInit {
  itemData: ItemOfEvent;
  itemDataDescHtml: any;
  constructor(
    private route: ActivatedRoute,
    private articleService: ArticleService,
    private http: HttpClient
  ) {
    let link = '/event/'+route.snapshot.params['link'];
    this.itemData = articleService.getOneEvent(link);
    /*
    http.get(this.itemData.desc_html_file).subscribe(res => { 
      this.itemDataDescHtml = res;
      console.log(this.itemDataDescHtml);
    });
    */
  }

  ngOnInit() {
  }

}
