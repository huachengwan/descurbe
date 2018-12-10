import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from '../home/home.component';
import { EventComponent } from '../home/event/event.component';
import { EventDetailComponent } from '../home/event/detail/detail.component';
import { AttractionComponent } from '../home/attraction/attraction.component';
import { RestaurantComponent } from '../home/restaurant/restaurant.component';
import { CafeComponent } from '../home/cafe/cafe.component';
import { BarComponent } from '../home/bar/bar.component';
import { HotelComponent } from '../home/hotel/hotel.component';
import { BathComponent } from '../home/bath/bath.component';

export const PublicRoutes: Routes = [
  {
    path: '',
    component: HomeComponent
  }, {
    path: 'event',
    component: EventComponent
  }, {
    path: 'event/:link',
    component: EventDetailComponent
  }, {
    path: 'attraction',
    component: AttractionComponent
  }, {
    path: 'restaurant',
    component: RestaurantComponent
  }, {
    path: 'cafe',
    component: CafeComponent
  }, {
    path: 'bar',
    component: BarComponent
  }, {
    path: 'hotel',
    component: HotelComponent
  }, {
    path: 'bath',
    component: BathComponent
  }
]