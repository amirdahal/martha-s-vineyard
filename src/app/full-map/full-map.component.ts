import { Component, OnInit } from '@angular/core';
import { FarmsRouteService } from '../farms/farms-route.service';

@Component({
  selector: 'app-full-map',
  templateUrl: './full-map.component.html',
  styleUrls: ['./full-map.component.css']
})
export class FullMapComponent implements OnInit {

  farms = [];
  constructor(private farmsService: FarmsRouteService) { }

  ngOnInit() {
    this.farms = this.farmsService.getFarms();
    console.log(this.farms);
  }

}
