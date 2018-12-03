import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-welcomeimage',
  template: `
    <div class="container-fluid">
      <div class="container welcome-text">
        <div class="row">
          <div class="col-md-12">
            <h4 class="text-center">DESDE AUSTRIA, ELLOS VISITAN DESCUBRELEON.MX</h4>
            <p class="text-center">
              <span class="desc">Cumplimos 10 años y lo celebramos con nuestros visitantes de todo el mundo.</span>
            </p>
            <p class="text-center"><button class="btn">Ver fotos &gt;</button></p>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .container-fluid {
      position: relative; padding: 0px;
      background-image: url('assets/img/home/inicio_viena.jpg');
      background-repeat: no-repeat; background-position: 50% 50%; background-size: cover;
      height: 900px;
    }
    .welcome-text {
    }
    .welcome-text h4 {
      margin-top: 70px;
      font-size: 3.21em; font-weight: bold;
    }
    .welcome-text p span.desc {
      font-size: 2.28em; line-height: 1.2em;
    }
    .welcome-text .btn {
      font-size: 2.28em; color: #fff; font-weight: bold;
      background-color: #0e8b2f;
    }
    @media (max-width: 767.98px) {
      .container-fluid {
        height: 600px;
      }
      .welcome-text h4 {
        margin-top: 50px;        
      }
    }
    @media (max-width: 479.98px) {
      .container-fluid {
        height: 340px;
      }
      .welcome-text h4 {
        margin-top: 30px;
      }
    }
    
  `]
})
export class HomeWelcomeimageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
