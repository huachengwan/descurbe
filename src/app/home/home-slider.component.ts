import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-slider',
  template: `
  <div class="container-fluid">
    <div class="container">
      <div class="row">
        <div class="col">
          <h1 class="h1_subt_mainpage">
            DESTACADO ESTE MES
          </h1>
        </div>
      </div>
    </div>
  </div>  
  <div class="container-fluid" style="background-image: url(&quot;assets/img/descubreleon/inicio_files/inicio-slider_1.jpg&quot;);">
    <div class="container">
      <div class="row ">
          <div class="col text-center px-0">
          <h1 class="ng-tns-c6-5 ng-trigger ng-trigger-bmaincontainer" style="padding-top: 0px; opacity: 1;">
            <font style="vertical-align: inherit;">
              <font style="vertical-align: inherit;">FROM AUSTRIA, THEY VISIT DISCOVERY.MX</font>
            </font>
          </h1>
          <p class="ng-tns-c6-5 ng-trigger ng-trigger-bmaincontainer" style="padding-top: 0px; opacity: 1;">
            <font style="vertical-align: inherit;">
              <font style="vertical-align: inherit;">We celebrate 10 years and we celebrate it with our visitors from all over the world</font>
            </font>
          </p>
          <button class="ng-tns-c6-5 ng-trigger ng-trigger-bmaincontainer" style="padding-top: 0px; opacity: 1;">
            <font style="vertical-align: inherit;">
              <font style="vertical-align: inherit;">SEE PHOTOS&gt;</font>
            </font>
          </button>
        </div>
      </div>
    </div>
  </div> 
  `,
  styles: [`
  
  `]
})
export class HomeSliderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
