import { Injectable } from '@angular/core';
import { ItemOfRestaurant } from './item-of-restaurant'
import { ItemOfEvent } from './item-of-event'
import { ItemOfArticle } from './item-of-article';
import { ItemOfBar } from './item-of-bar';


@Injectable({
  providedIn: 'root'
})

export class ArticleService {
  constructor() { }
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
    list.push(new ItemOfEvent('The lighthouse', '/event/item1',  'assets/img/descubreleon/agenda/agenda_files/parque-gj_01.jpg', '2x1 buffet breakfast at El Faro restaurant', '2018-09-21', '7:00'));
    list.push(new ItemOfEvent('The lighthouse', '/event/item2',  'assets/img/descubreleon/agenda/agenda_files/rest_mariskena-molcajete.jpg', '2x1 buffet breakfast at El Faro restaurant', '2018-09-21', '7:30'));
    list.push(new ItemOfEvent('ThaiWok Plaza Sevilla', '/event/item3', 'assets/img/descubreleon/agenda/agenda_files/cafes_01.jpg', '2x1 buffet breakfast at El Faro restaurant', '2018-09-21', '7:40'));
    list.push(new ItemOfEvent('ThaiWok Plaza Sevilla', '/event/item4', 'assets/img/descubreleon/agenda/agenda_files/01nov_teatro-ejemplo.jpg', '2x1 buffet breakfast at El Faro restaurant', '2018-09-21', '8:00'));
    list.push(new ItemOfEvent('ThaiWok Plaza Sevilla', '/event/item5', 'assets/img/descubreleon/agenda/agenda_files/01nov_musica-ejemplo.jpg', '2x1 buffet breakfast at El Faro restaurant', '2018-09-21', '9:00'));
    list.push(new ItemOfEvent('ThaiWok Plaza Sevilla', '/event/item6', 'assets/img/descubreleon/agenda/agenda_files/antros_01.jpg', '2x1 buffet breakfast at El Faro restaurant', '2018-09-21', '12:00'));
    return list;
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
