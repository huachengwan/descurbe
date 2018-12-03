import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { RouterModule, PreloadAllModules } from '@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { SharedModule } from './shared/shared.module';
import { AuthModule } from './auth/auth.module';

import { AppComponent } from './app.component';
import { AdminModule } from './admin/admin.module';
import { AuthHeaderInterceptor } from './interceptors/header.interceptor';
import { CatchErrorInterceptor } from './interceptors/http-error.interceptor';

import { AppRoutingModule } from './app-routing/app-routing.module';

import {
  MatAutocompleteModule, MatBadgeModule, MatBottomSheetModule, MatButtonModule,
  MatButtonToggleModule, MatCardModule, MatCheckboxModule, MatChipsModule, MatDatepickerModule,
  MatDialogModule, MatDividerModule, MatExpansionModule, MatFormFieldModule, MatGridListModule,
  MatIconModule, MatInputModule, MatListModule, MatMenuModule, MatPaginatorModule,
  MatProgressBarModule, MatProgressSpinnerModule, MatRadioModule, MatRippleModule, MatSelectModule,
  MatSidenavModule, MatSliderModule, MatSlideToggleModule, MatSnackBarModule, MatSortModule,
  MatStepperModule, MatTableModule, MatTabsModule, MatToolbarModule, MatTooltipModule, MatTreeModule
} from '@angular/material';
import { AgmCoreModule } from '@agm/core';

import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './common/header.component';
import { HeaderMobileComponent } from './common/header-mobile.component';
import { FooterComponent } from './common/footer.component';
import { HomeWelcomeimageComponent } from './home/home-welcomeimage.component';
import { HomeSliderComponent } from './home/home-slider.component';
import { HomeQueComponent } from './home/home-que.component';
import { HomeArticulosComponent } from './home/home-articulos.component';
import { HomeRestaurantComponent } from './home/home-restaurant.component';
import { HomeAntrosComponent } from './home/home-antros.component';
import { EventComponent } from './home/event/event.component';
import { AttractionComponent } from './home/attraction/attraction.component';
import { RestaurantComponent } from './home/restaurant/restaurant.component';
import { CafeComponent } from './home/cafe/cafe.component';
import { BarComponent } from './home/bar/bar.component';
import { HotelComponent } from './home/hotel/hotel.component';
import { BathComponent } from './home/bath/bath.component';
import { HomeMapComponent } from './home/home-map.component';
import { HomeSubscriptionComponent } from './home/home-subscription.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    HeaderMobileComponent,
    FooterComponent,
    HomeWelcomeimageComponent,
    HomeSliderComponent,
    HomeQueComponent,
    HomeArticulosComponent,
    HomeRestaurantComponent,
    HomeAntrosComponent,
    EventComponent,
    AttractionComponent,
    RestaurantComponent,
    CafeComponent,
    BarComponent,
    HotelComponent,
    BathComponent,
    HomeMapComponent,
    HomeSubscriptionComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule,
    SharedModule,
    AuthModule,
    AdminModule,
    AppRoutingModule,

    MatAutocompleteModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSlideToggleModule,
    MatSliderModule,
    MatSnackBarModule,
    MatSortModule,
    MatStepperModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatTreeModule,

    MDBBootstrapModule,
    AgmCoreModule.forRoot({
      apiKey: ''
    })
  ],
  exports: [
    MatAutocompleteModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSlideToggleModule,
    MatSliderModule,
    MatSnackBarModule,
    MatSortModule,
    MatStepperModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatTreeModule,
    
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthHeaderInterceptor,
    multi: true,
  }, {
    provide: HTTP_INTERCEPTORS,
    useClass: CatchErrorInterceptor,
    multi: true,
  }],
  entryComponents: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
