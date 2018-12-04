import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-subscription',
  template: `
  <div class="container">
    <div class="row desc">
      <div class="col-md-6 col-sm-12">
        <p class="text-center">
          Do not miss the best events in León totally free Do not miss the best events in León, receive our Electronic Newsletter, totally free
        </p>
      </div>      
    </div>
    <div class="row submit">
      <div class="col">
        <input class="form-control col-md-9 mr-2" placeholder="tu@correo.com" type="text">
        <button type="submit" class="btn_suscribirme">
          Subscribe&nbsp;&gt;
        </button>
      </div>
    </div>
  </div>
  `,
  styles: [`
    .desc > div {
      margin: 0 auto;
    }
    .desc p {
      width: 100%;
      font-size: 25px;
      color: rgb(14, 139, 47);
      font-family: Oswald;
    }
    .submit > div {
      margin: 0 auto;
      text-align: center;
    }
    .submit input {
      width: 220px;
      display: inline-block;
    }
    .submit button[type=submit] {
      width: 150px;
      display: inline-block;
      cursor: pointer;
      background-color: rgb(14, 139, 47);
      color: #fff; font-size: 20px; line-height: 35px;
      border: 0;
    }
    @media(max-width: 767.98px) {
      .submit input {
        width: 100%;
      }
      .submit button[type=submit] {
        width: 100%;
      }
    }
    
  `]
})
export class HomeSubscriptionComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
