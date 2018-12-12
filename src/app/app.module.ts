import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { RouterModule, PreloadAllModules } from '@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

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
import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { HomeLayoutComponent } from './home/layout.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './home/common/header.component';
import { HeaderMobileComponent } from './home/common/header-mobile.component';
import { FooterComponent } from './home/common/footer.component';
import { HomeSidebarComponent } from './home/home-sidebar.component';
import { CalendarComponent } from './home/common/calendar.component';

import { HomeWelcomeimageComponent } from './home/home-welcomeimage.component';
import { HomeSliderComponent } from './home/home-slider.component';
import { HomeEventComponent } from './home/home-event.component';
import { HomeArticleComponent } from './home/home-article.component';
import { HomeRestaurantComponent } from './home/home-restaurant.component';
import { HomeBarComponent } from './home/home-bar.component';
import { HomeMapComponent } from './home/home-map.component';
import { HomeSubscriptionComponent } from './home/home-subscription.component';

import { EventComponent } from './home/event/event.component';
import { EventArchiveComponent } from './home/event/archive/archive.component';
import { EventArchiveItemComponent } from './home/event/archive/item.component';
import { EventDetailComponent } from './home/event/detail/detail.component';
import { AttractionComponent } from './home/attraction/attraction.component';
import { RestaurantComponent } from './home/restaurant/restaurant.component';
import { RestaurantItemComponent } from './home/restaurant/item.component';
import { CafeComponent } from './home/cafe/cafe.component';
import { CafeListComponent } from './home/cafe/list/list.component';
import { CafeListItemComponent } from './home/cafe/list/item.component';
import { CafeDetailComponent } from './home/cafe/detail/detail.component';
import { BarComponent } from './home/bar/bar.component';
import { HotelComponent } from './home/hotel/hotel.component';
import { BathComponent } from './home/bath/bath.component';
import { HotelCheckFormComponent } from './home/hotel/check-form.component';

@NgModule({
  declarations: [
    AppComponent,

    HomeLayoutComponent,
    HomeComponent,
    HeaderComponent,
    HeaderMobileComponent,
    FooterComponent,
    HomeSidebarComponent,
    CalendarComponent,

    HomeWelcomeimageComponent,
    HomeSliderComponent,
    HomeEventComponent,
    HomeArticleComponent,
    HomeRestaurantComponent,
    HomeBarComponent,
    HomeMapComponent,
    HomeSubscriptionComponent,

    EventComponent,
    EventArchiveComponent,
    EventArchiveItemComponent,
    EventDetailComponent,
    AttractionComponent,
    RestaurantComponent,
    RestaurantItemComponent,
    CafeComponent,
    CafeListComponent,
    CafeListItemComponent,
    CafeDetailComponent,
    BarComponent,
    HotelComponent,
    BathComponent,
    HotelCheckFormComponent,
    
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

    MatAutocompleteModule, MatBadgeModule, MatBottomSheetModule, MatButtonModule, MatButtonToggleModule, MatCardModule, MatCheckboxModule, MatChipsModule, MatDatepickerModule, MatDialogModule, MatDividerModule, MatExpansionModule, MatFormFieldModule, MatGridListModule, MatIconModule, MatInputModule, MatListModule, MatMenuModule, MatPaginatorModule, MatProgressBarModule, MatProgressSpinnerModule, MatRadioModule, MatRippleModule, MatSelectModule, MatSidenavModule, MatSlideToggleModule, MatSliderModule, MatSnackBarModule, MatSortModule, MatStepperModule, MatTableModule, MatTabsModule, MatToolbarModule, MatTooltipModule, MatTreeModule,

    MDBBootstrapModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDlaGIXLEDPSxiBrYOX2dwCePMVkRUebZc'
    }),
  ],
  exports: [
    MatAutocompleteModule, MatBadgeModule, MatBottomSheetModule, MatButtonModule, MatButtonToggleModule, MatCardModule, MatCheckboxModule, MatChipsModule, MatDatepickerModule,MatDialogModule, MatDividerModule, MatExpansionModule, MatFormFieldModule, MatGridListModule, MatIconModule, MatInputModule, MatListModule, MatMenuModule, MatPaginatorModule, MatProgressBarModule, MatProgressSpinnerModule, MatRadioModule, MatRippleModule, MatSelectModule, MatSidenavModule, MatSlideToggleModule, MatSliderModule, MatSnackBarModule, MatSortModule, MatStepperModule, MatTableModule, MatTabsModule, MatToolbarModule, MatTooltipModule, MatTreeModule,
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
