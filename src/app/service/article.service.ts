import { Injectable } from '@angular/core';
import { ItemOfRestaurant } from './item-of-restaurant'
import { ItemOfEvent } from './item-of-event'
import { ItemOfArticle } from './item-of-article';
import { ItemOfBar } from './item-of-bar';
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
    list.push(new ItemOfRestaurant('The lighthouse', 'restaurantes',  'assets/img/descubreleon/agenda/agenda_files/rest_elfaro-desayuno.jpg'));
    list.push(new ItemOfRestaurant('ThaiWok Plaza Sevilla', 'restaurantes', 'assets/img/descubreleon/agenda/agenda_files/rest_thaiwok_01.jpg'));
    list.push(new ItemOfRestaurant('ThaiWok Plaza Sevilla', 'restaurantes', 'assets/img/descubreleon/agenda/agenda_files/rest_molinito-oreja.jpg'));
    list.push(new ItemOfRestaurant('ThaiWok Plaza Sevilla', 'restaurantes', 'assets/img/descubreleon/agenda/agenda_files/rest_rincongaucho-empanadas.jpg'));
    list.push(new ItemOfRestaurant('ThaiWok Plaza Sevilla', 'restaurantes', 'assets/img/descubreleon/agenda/agenda_files/rest_carnesdelatorre-carne.jpg'));
    list.push(new ItemOfRestaurant('ThaiWok Plaza Sevilla', 'restaurantes', 'assets/img/descubreleon/agenda/agenda_files/rest_mariskena-huachinango-filete.jpg'));
    return list;
  }
  
  getEvents(): ItemOfEvent[] {
    let list = [];
    this.getEventsFromJson().subscribe(res => {
      for (let index in res) {
        let item = res[index];
        let item_ = new ItemOfEvent(item.title, item.link);
        item_.image_file = item.image_file;
        item_.short_desc = item.short_desc;
        item_.date = item.date;
        item_.time = item.time;
        item_.desc_html_file = item.desc_html_file;
        list.push(item_);
      }
    })
    return list;
  }
  getEventsFromJson(): Observable<ItemOfEvent[]> {
    return this.http.get<ItemOfEvent[]>('/assets/temp-data/events.json');
  }

  getOneEvent(link): ItemOfEvent {
    let current_item = new ItemOfEvent('', '');
    this.getEventsFromJson().subscribe(res => {
      for (let index in res) {
        let item = res[index];
        if (item.link == link){
          current_item.title = item.title;
          current_item.link = item.link;
          current_item.image_file = item.image_file;
          current_item.short_desc = item.short_desc;
          current_item.date = item.date;
          current_item.time = item.time;
          current_item.desc_html_file = item.desc_html_file;
        }
      }
    })
    return current_item;
  }

  getArticles(): ItemOfArticle[] {
    let list = [];
    list.push(new ItemOfArticle('Cumplimos 10 anos y io celebramos por todo dlmundo', 'restaurantes',  'assets/img/descubreleon/articulos/2018/10aniv_01_med.jpg'));
    list.push(new ItemOfArticle('Cumplimos 10 anos y io celebramos por todo dlmundo', 'restaurantes',  'assets/img/descubreleon/articulos/2018/02_med.jpg'));
    list.push(new ItemOfArticle('Cumplimos 10 anos y io celebramos por todo dlmundo', 'restaurantes', 'assets/img/descubreleon/articulos/2018/03_med.jpg'));
    list.push(new ItemOfArticle('Cumplimos 10 anos y io celebramos por todo dlmundo', 'restaurantes', 'assets/img/descubreleon/articulos/2018/04_med.jpg'));
    return list;
  }

  getBars(): ItemOfBar[] {
    let list = [];
    list.push(new ItemOfBar('ThaiWok Plaza Sevilla', 'restaurantes', 'assets/img/descubreleon/agenda/agenda_files/vn_barezzito_01.jpg'));
    list.push(new ItemOfBar('The lighthouse', 'restaurantes',  'assets/img/descubreleon/agenda/agenda_files/vn_etnico_01.jpg'));
    list.push(new ItemOfBar('The lighthouse', 'restaurantes',  'assets/img/descubreleon/agenda/agenda_files/vn_500noches_01.jpg'));
    list.push(new ItemOfBar('ThaiWok Plaza Sevilla', 'restaurantes', 'assets/img/descubreleon/agenda/agenda_files/vn_panic-botanic_01.jpg'));
    list.push(new ItemOfBar('ThaiWok Plaza Sevilla', 'restaurantes', 'assets/img/descubreleon/agenda/agenda_files/vn_panteon-calzada_01.jpg'));
    list.push(new ItemOfBar('ThaiWok Plaza Sevilla', 'restaurantes', 'assets/img/descubreleon/agenda/agenda_files/vn_rey-compadre_01.jpg'));
    return list;
  }
}
