import { Injectable } from '@angular/core';
import { Farms } from './farms';

@Injectable({
  providedIn: 'root'
})
export class FarmDataService {

  constructor(private farms: Farms) {
    console.log(farms.farmData);
  }

  getFarmData(slug:String) {
    const data =  this.farms.farmData.filter(data => data['slug'] == slug);
    if(data) {
      return data;
    } else {
      return null;
    }
  }
}
