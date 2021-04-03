import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './navs/header/header.component';
import {Route, RouterModule} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FaqComponent } from './faq/faq.component';
import { TalktousComponent } from './talktous/talktous.component';
import { FarmsRouteService } from './farms/farms-route.service';
import { CommonModule } from '@angular/common';
import { FullMapComponent } from './full-map/full-map.component';
import { LandViewDetailsComponent } from './full-map/land-view-details/land-view-details.component';
import { FormsModule } from '@angular/forms';

const routes: Route[] = [
  { path: '', component: HomeComponent },
  { path: 'faq', component: FaqComponent },
  { path: 'talk', component: TalktousComponent },
  {path: 'map', children: [
    { path: '', component: FullMapComponent },
    { path: ':id', component: FullMapComponent }
  ] },
  
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FaqComponent,
    TalktousComponent,
    FullMapComponent,
    LandViewDetailsComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    CommonModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    FarmsRouteService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
