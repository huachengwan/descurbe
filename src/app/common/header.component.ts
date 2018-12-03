import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  navItems = [
    {name: 'Examples', route: '/examples'}
  ]

  backgroundImages = [
    './assets/img/banner_arco.jpg',
    './assets/img/banner_ballet.jpg',
    './assets/img/banner_fuente.jpg',
    './assets/img/banner_pizza.jpg'
  ]

  constructor() { }

  ngOnInit() {
  }

  searchWord = '';
  search() {
    console.log(this.searchWord);
  }

}
