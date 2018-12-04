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

  getEvent(): ItemOfEvent[] {
    let list = [];
    list.push(new ItemOfEvent('The lighthouse', 'restaurantes',  'assets/img/descubreleon/agenda/agenda_files/parque-gj_01.jpg'));
    list.push(new ItemOfEvent('The lighthouse', 'restaurantes',  'assets/img/descubreleon/agenda/agenda_files/rest_mariskena-molcajete.jpg'));
    list.push(new ItemOfEvent('ThaiWok Plaza Sevilla', 'restaurantes', 'assets/img/descubreleon/agenda/agenda_files/cafes_01.jpg'));
    list.push(new ItemOfEvent('ThaiWok Plaza Sevilla', 'restaurantes', 'assets/img/descubreleon/agenda/agenda_files/01nov_teatro-ejemplo.jpg'));
    list.push(new ItemOfEvent('ThaiWok Plaza Sevilla', 'restaurantes', 'assets/img/descubreleon/agenda/agenda_files/01nov_musica-ejemplo.jpg'));
    list.push(new ItemOfEvent('ThaiWok Plaza Sevilla', 'restaurantes', 'assets/img/descubreleon/agenda/agenda_files/antros_01.jpg'));
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

  getBar(): ItemOfBar[] {
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
