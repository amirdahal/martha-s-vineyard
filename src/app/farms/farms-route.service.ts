import { Injectable, NgModule } from '@angular/core';

const LandDataA2G = [
  { id: 22, name: 'Allen Farm', slug: '32-allen-farm'},
  { id: 6, name: 'Aquinnah Headlands Preserve', slug: '6-aquinnah-Headlands-Preserve'},
  { id: 72, name: 'Beech Tree Preserve', slug: '72-beech-tree-preserve'},
  { id: 35, name: 'Bare Hill Preserve', slug: '35-bare-hill-preserve'},
  { id: 46, name: 'Ben Toms Preserve', slug: '46-ben-toms-preserve'},
  { id: 37, name: 'Blackwater Pond Reservation', slug: '37-blackwater-pond-reservation'},
  { id: 61, name: 'Blue Barque Preserve', slug: '61-blue-barque-preserve'},
  { id: 74, name: 'Caleb\'s Pond Preserve', slug: '74-calebs-pond-preserve'},
  { id: 26, name: 'Chappy Point Beach', slug: '26-happy-point-beach'},
  { id: 43, name: 'Child Farm East', slug: '43-child-farm-east'},
  { id: 34, name: 'Child Farm West', slug: '34-child-farm-west'},
  { id: 25, name: 'ChildMark Pond Preserve', slug: '25-childmark-pond-preserve'},
  { id: 2, name: 'Christiantown Woods Preserve', slug: '2-christiantown-woods-preserve'},
  { id: 55, name: 'Cove Meadow Preserve', slug: '55-cove-meadow-preserve'},
  { id: 68, name: 'Doug\'s Cove Preserve', slug: '68-dougs-cove-preserve'},
  { id: 31, name: 'Edgartown Great Pond Beach', slug: '31-edgartown-great-pond-beach'},
  { id: 17, name: 'Farm Pond Preserve', slug: '17-farm-pond-preserve'},
  { id: 30, name: 'Featherstone Farm', slug: '30-featherstone-farm'},
  { id: 51, name: 'Felix Neck Preserve', slug: '51-felix-neck-preserve'},
  { id: 1, name: 'Fulling Mill Brook', slug: '1-fulling-mill-brook'},
  { id: 33, name: 'Gay Head Moraine', slug: '33-gay-head-moraine'},
  { id: 69, name: 'Goff Farm', slug: '69-goff-farm'},
  { id: 32, name: 'Great Rock Bight', slug: '32-great-rock-bight'}
];

const LandDataH2O = [
  {id: 36, name: 'Hillmans Point Preserve', slug: '36-hillmans-point-preserve'},
  {id: 54, name: 'John Presbury Norton Farm', slug: '54-john-presbury-norton-farm'},
  {id: 3, name: 'Katama Point Preserve', slug: '3-katama-point-preserve'},
  {id: 67, name: 'Kingsbury Fields', slug: '67-kingsbury-fields'},
  {id: 44, name: 'Little Duarte\'s Pond', slug: '44-little-duartes-pond'},
  {id: 66, name: 'Little Field Preserve', slug: '66-little-field-preserve'},
  // {id: , name: '', slug: ''},
  // {id: , name: '', slug: ''},
  // {id: , name: '', slug: ''},
  // {id: , name: '', slug: ''},
  // {id: , name: '', slug: ''},
  // {id: , name: '', slug: ''},
  // {id: , name: '', slug: ''},
  // {id: , name: '', slug: ''},
  // {id: , name: '', slug: ''},
  // {id: , name: '', slug: ''},
  // {id: , name: '', slug: ''},
  // {id: , name: '', slug: ''},
  // {id: , name: '', slug: ''},
  // {id: , name: '', slug: ''},
  // {id: , name: '', slug: ''},
  // {id: , name: '', slug: ''},
  // {id: , name: '', slug: ''},
  // {id: , name: '', slug: ''},
];

@Injectable({
  providedIn: 'root',
  
})
export class FarmsRouteService {

  constructor() {}

  getFarms() {
    return LandDataA2G;
  }

  getFarmDetails(slug:String) {
    return LandDataA2G.filter(data => data['slug'] == slug);
  }
}
