import { Injectable } from '@angular/core';
import { ItemOfRestaurant } from './item-of-restaurant'
import { ItemOfQue } from './item-of-que'
import { ItemOfArticulos } from './item-of-articulos';
import { ItemOfAntros } from './item-of-antros';


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

  getQue(): ItemOfQue[] {
    let list = [];
    list.push(new ItemOfQue('The lighthouse', 'restaurantes',  'assets/img/descubreleon/agenda/agenda_files/parque-gj_01.jpg'));
    list.push(new ItemOfQue('The lighthouse', 'restaurantes',  'assets/img/descubreleon/agenda/agenda_files/rest_mariskena-molcajete.jpg'));
    list.push(new ItemOfQue('ThaiWok Plaza Sevilla', 'restaurantes', 'assets/img/descubreleon/agenda/agenda_files/cafes_01.jpg'));
    list.push(new ItemOfQue('ThaiWok Plaza Sevilla', 'restaurantes', 'assets/img/descubreleon/agenda/agenda_files/01nov_teatro-ejemplo.jpg'));
    list.push(new ItemOfQue('ThaiWok Plaza Sevilla', 'restaurantes', 'assets/img/descubreleon/agenda/agenda_files/01nov_musica-ejemplo.jpg'));
    list.push(new ItemOfQue('ThaiWok Plaza Sevilla', 'restaurantes', 'assets/img/descubreleon/agenda/agenda_files/antros_01.jpg'));
    return list;
  }

  getArticulos(): ItemOfArticulos[] {
    let list = [];
    list.push(new ItemOfQue('Cumplimos 10 anos y io celebramos por todo dlmundo', 'restaurantes',  'assets/img/descubreleon/articulos/2018/10aniv_01_med.jpg'));
    list.push(new ItemOfQue('Cumplimos 10 anos y io celebramos por todo dlmundo', 'restaurantes',  'assets/img/descubreleon/articulos/2018/02_med.jpg'));
    list.push(new ItemOfQue('Cumplimos 10 anos y io celebramos por todo dlmundo', 'restaurantes', 'assets/img/descubreleon/articulos/2018/03_med.jpg'));
    list.push(new ItemOfQue('Cumplimos 10 anos y io celebramos por todo dlmundo', 'restaurantes', 'assets/img/descubreleon/articulos/2018/04_med.jpg'));
    return list;
  }

  getAntros(): ItemOfAntros[] {
    let list = [];
    list.push(new ItemOfAntros('ThaiWok Plaza Sevilla', 'restaurantes', 'assets/img/descubreleon/agenda/agenda_files/vn_barezzito_01.jpg'));
    list.push(new ItemOfAntros('The lighthouse', 'restaurantes',  'assets/img/descubreleon/agenda/agenda_files/vn_etnico_01.jpg'));
    list.push(new ItemOfAntros('The lighthouse', 'restaurantes',  'assets/img/descubreleon/agenda/agenda_files/vn_500noches_01.jpg'));
    list.push(new ItemOfAntros('ThaiWok Plaza Sevilla', 'restaurantes', 'assets/img/descubreleon/agenda/agenda_files/vn_panic-botanic_01.jpg'));
    list.push(new ItemOfAntros('ThaiWok Plaza Sevilla', 'restaurantes', 'assets/img/descubreleon/agenda/agenda_files/vn_panteon-calzada_01.jpg'));
    list.push(new ItemOfAntros('ThaiWok Plaza Sevilla', 'restaurantes', 'assets/img/descubreleon/agenda/agenda_files/vn_rey-compadre_01.jpg'));
    return list;
  }
}
