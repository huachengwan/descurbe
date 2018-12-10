import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-mobile',
  template: `
    <mat-sidenav  #sidenav role="navigation">
      <mat-nav-list>
        <a mat-list-item>
          <mat-icon class="icon">input</mat-icon>
          <span class="label">Favorites</span>
        </a>
        <a mat-list-item>
          <mat-icon class="icon">home</mat-icon>  
          <span class="label">My Account</span>
        </a>
        <a mat-list-item>
          <mat-icon class="icon">dashboard</mat-icon>  
          <span class="label">Spanish</span>
        </a>
      </mat-nav-list>
    </mat-sidenav>
  `,
  styles: [`
  `]
})
export class HeaderMobileComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
