import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { FarmsRouteService } from '../farms/farms-route.service';

@Component({
  selector: 'app-full-map',
  templateUrl: './full-map.component.html',
  styleUrls: ['./full-map.component.css']
})
export class FullMapComponent implements OnInit {

  subs: Subscription;

  farms = [];

  constructor(private farmsService: FarmsRouteService, private router:Router) { }

  ngOnInit() {
    this.farms = this.farmsService.getFarms();
    
  }

  navigate(slug:String) {
    console.log(slug);
    this.router.navigate(['/map', slug]);
  }

}
