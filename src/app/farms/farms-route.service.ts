import { Injectable, NgModule } from '@angular/core';

const LandDataA = [
  { id: 22, name: 'Allen Farm', slug: '32-allen-farm'},
  { id: 6, name: 'Aquinnah Headlands Preserve', slug: '6-aquinnah-Headlands-Preserve'},
  { id: 72, name: 'Beech Tree Preserve', slug: '72-beech-tree-preserve'},
  { id: 35, name: 'Bare Hill Preserve', slug: '35-bare-hill-preserve'},
  { id: 46, name: 'Ben Toms Preserve', slug: '46-ben-toms-preserve'},
  { id: 37, name: 'Blackwater Pond Reservation', slug: '37-blackwater-pond-reservation'},
  { id: 61, name: 'Blue Barque Preserve', slug: '61-blue-barque-reserve'},
  { id: 74, name: 'Caleb\'s Pond Preserve', slug: '74-calebs-pond-preserve'},
  { id: 22, name: 'Allen Farm', slug: '32-allen-farm'},
  { id: 22, name: 'Allen Farm', slug: '32-allen-farm'},
  { id: 22, name: 'Allen Farm', slug: '32-allen-farm'},
];

@Injectable({
  providedIn: 'root',
  
})
export class FarmsRouteService {

  constructor() {
    //console.log(LandDataA);
  }

  getFarms() {
    return LandDataA;
  }
}
