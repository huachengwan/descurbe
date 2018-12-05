import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../auth/auth-guard.service';
import { HomeComponent } from '../home/home.component';
import { EventComponent } from '../home/event/event.component';
import { EventDetailComponent } from '../home/event/detail/detail.component';
import { AttractionComponent } from '../home/attraction/attraction.component';
import { RestaurantComponent } from '../home/restaurant/restaurant.component';
import { CafeComponent } from '../home/cafe/cafe.component';
import { BarComponent } from '../home/bar/bar.component';
import { HotelComponent } from '../home/hotel/hotel.component';
import { BathComponent } from '../home/bath/bath.component';

const routes: Routes = [{
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
}, {
  path: 'auth',
  loadChildren: 'app/auth/auth.module#AuthModule'
}, {
  path: 'admin',
  loadChildren: 'app/admin/admin.module#AdminModule'
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard],
  declarations: []
})

export class AppRoutingModule {}
