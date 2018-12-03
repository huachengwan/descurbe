import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-subscription',
  template: `
  <div class="container">
    <div class="row">
      <p class="text-center title">
        <font style="vertical-align: inherit;">
          <font style="vertical-align: inherit;"> Do not miss the best events in León totally free Do not miss the best events in León, receive our Electronic Newsletter, totally free</font>
        </font>
      </p>
    </div>
    <div class="row">
      <div class="row submit">
        <input class="form-control col-md-9 mr-2" placeholder="tu@correo.com" type="text">
        <button class="btn_suscribirme">
            <font style="vertical-align: inherit;">
                <font style="vertical-align: inherit;">Subscribe&gt;</font>
            </font>
        </button> 
      </div>
    </div>
  </div>
  `,
  styles: [`
    .title {
      width: 100%;
      margin-inline-end: 313.5px; margin-inline-start: 313.5px;
      margin-left: 313.5px; margin-right: 313.5px; margin-top: 40px;
      font-size: 25px;
      color: rgb(14, 139, 47);
      font-family: Oswald;
    } 
    .submit {
      width: 100%;
      margin-top: 0px;
      margin-inline-end: 313.5px; margin-inline-start: 313.5px;
      margin-left: 313.5px; margin-right: 313.5px;
      margin-bottom: 2%;

    }
    .form-control {
      max-width: 40%;
      margin-left: 10%;
    }
    .btn_suscribirme {
      width: 40%;
      background-color: rgb(14, 139, 47);
      color: #fff;
      cursor: pointer;
      font-size: 20px;
      line-height: 35px;
    }
  `]
})
export class HomeSubscriptionComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
