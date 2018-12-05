import { Injectable } from '@angular/core';
import { ItemOfRestaurant } from './item-of-restaurant'
import { ItemOfEvent } from './item-of-event'
import { ItemOfArticle } from './item-of-article';
import { ItemOfBar } from './item-of-bar';
import { ItemOfCafe } from './item-of-cafe'
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import * as _ from 'lodash';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  http: HttpClient;
  constructor(
    http: HttpClient
  ) { 
    this.http = http;
  }  

  getRestaurants(): ItemOfRestaurant[] {
    let list = [];
    this.getRestaurantsFromJson().subscribe(res=>{
      for (let index in res) {
        let item = res[index];
        let item_ = new ItemOfRestaurant();
        item_.image_file = item.image_file;
        item_.title = item.title;
        list.push(item_);
      }
    })
    return list;
  }

  getRestaurantsFromJson(): Observable<ItemOfRestaurant[]>{
    return this.http.get<ItemOfRestaurant[]>('/assets/temp-data/restaurants.json');
  }

  getOneRestaurant(): ItemOfRestaurant {
    let current_item = new ItemOfRestaurant();
    this.getRestaurantsFromJson().subscribe(res => {
      for ( let index in res ) {
        let item = res[index];
        current_item.title = item.title;
        current_item.image_file = item.image_file;
      }
    })
    return current_item;
  }
  
  getEvents(): ItemOfEvent[] {
    let list = [];
    this.getEventsFromJson().subscribe(res => {
      for (let index in res) {
        let item = res[index];
        let item_ = new ItemOfEvent();
        item_.title = item.title;
        item_.link = item.link;
        item_.subtitle = item.subtitle;
        item_.image_file = item.image_file;
        item_.short_desc = item.short_desc;
        item_.year = item.year;
        item_.month = item.month;
        item_.date = item.date;
        item_.time = item.time;
        item_.apm = item.apm;
        item_.category = item.category;
        item_.category_color = item.category_color;
        item_.desc_html_file = item.desc_html_file;
        item_.desc = item.desc;
        item_.desc_image_path = item.desc_image_path;
        list.push(item_);
      }
    })
    return list;
  }
  getEventsFromJson(): Observable<ItemOfEvent[]> {
    return this.http.get<ItemOfEvent[]>('/assets/temp-data/events.json');
  }

  getOneEvent(link): ItemOfEvent {
    let current_item = new ItemOfEvent();
    this.getEventsFromJson().subscribe(res => {
      for (let index in res) {
        let item = res[index];
        if (item.link == link){
          current_item.title = item.title;
          current_item.link = item.link;
          current_item.subtitle = item.subtitle;
          current_item.link = item.link;
          current_item.image_file = item.image_file;
          current_item.short_desc = item.short_desc;
          current_item.year = item.year;
          current_item.month = item.month;
          current_item.date = item.date;
          current_item.day = item.day;
          current_item.time = item.time;
          current_item.apm = item.apm;
          current_item.category = item.category;
          current_item.category_color = item.category_color;
          current_item.desc_html_file = item.desc_html_file;
          current_item.desc = item.desc;
          current_item.desc_image_path = item.desc_image_path;
        }
      }
    })
    return current_item;
  }


  getArticles(): ItemOfArticle[] {
    let list = [];
    this.getArticlesFromJson().subscribe(res=>{
      for (let index in res) {
        let item = res[index];
        let item_ = new ItemOfArticle();
        item_.image_file = item.image_file;
        item_.title = item.title;
        list.push(item_);
      }
    })
    return list;
  }

  getArticlesFromJson(): Observable<ItemOfArticle[]>{
    return this.http.get<ItemOfArticle[]>('/assets/temp-data/articles.json');
  }

  getOneArticle(): ItemOfArticle {
    let current_item = new ItemOfEvent();
    this.getArticlesFromJson().subscribe(res => {
      for ( let index in res ) {
        let item = res[index];
        current_item.title = item.title;
        current_item.image_file = item.image_file;
      }
    })
    return current_item;
  }


  getBars(): ItemOfBar[] {
    let list = [];
    this.getBarsFromJson().subscribe(res=>{
      for (let index in res) {
        let item = res[index];
        let item_ = new ItemOfBar();
        item_.image_file = item.image_file;
        item_.title = item.title;
        item_.address = item.address;
        item_.open_time = item.open_time;
        item_.phone_number = item.phone_number;
        list.push(item_);
      }
    })
    return list;
  }

  getBarsFromJson(): Observable<ItemOfBar[]>{
    return this.http.get<ItemOfBar[]>('/assets/temp-data/bars.json');
  }

  getOneBar(): ItemOfBar {
    let current_item = new ItemOfBar();
    this.getBarsFromJson().subscribe(res => {
      for ( let index in res ) {
        let item = res[index];
        current_item.title = item.title;
        current_item.image_file = item.image_file;
        current_item.address = item.address;
        current_item.open_time = item.open_time;
        current_item.phone_number = item.phone_number;
      }
    })
    return current_item;
  }


  getCafes(): ItemOfCafe[] {
    let list = [];
    this.getCafesFromJson().subscribe(res=>{
      for (let index in res) {
        let item = res[index];
        let item_ = new ItemOfCafe();
        item_.image_file = item.image_file;
        item_.title = item.title;
        item_.address = item.address;
        item_.open_time = item.open_time;
        item_.phone_number = item.phone_number;
        list.push(item_);
      }
    })
    return list;
  }

  getCafesFromJson(): Observable<ItemOfCafe[]>{
    return this.http.get<ItemOfCafe[]>('/assets/temp-data/cafes.json');
  }

  getOneCafe(): ItemOfCafe {
    let current_item = new ItemOfCafe();
    this.getCafesFromJson().subscribe(res => {
      for ( let index in res ) {
        let item = res[index];
        current_item.title = item.title;
        current_item.image_file = item.image_file;
        current_item.address = item.address;
        current_item.open_time = item.open_time;
        current_item.phone_number = item.phone_number;
      }
    })
    return current_item;
  }
}
