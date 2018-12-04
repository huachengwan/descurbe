import { Component, OnInit, HostListener, Inject } from '@angular/core';
import { trigger, state, transition, style, animate } from '@angular/animations'; 
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations:[ 
    trigger('fade', [ 
      state('void', style({ opacity : 0})),
      transition(':enter',[ animate(300)]),
      transition(':leave',[ animate(500)]),
    ])
  ]
})
export class HeaderComponent implements OnInit {
  constructor(
    @Inject(DOCUMENT) document
  ) { }

  ngOnInit() {
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(e) {
     if (window.pageYOffset > 550) {
       let element = document.getElementById('main-menu');
       element.classList.add('sticky');
     } else {
      let element = document.getElementById('main-menu');
        element.classList.remove('sticky'); 
     }
  }

  searchWord = '';
  search() {
    console.log(this.searchWord);
  }

  

}
