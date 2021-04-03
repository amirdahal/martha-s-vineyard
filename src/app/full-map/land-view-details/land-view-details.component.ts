import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { FarmsRouteService } from 'src/app/farms/farms-route.service';

@Component({
  selector: 'app-land-view-details',
  templateUrl: './land-view-details.component.html',
  styleUrls: ['./land-view-details.component.css']
})
export class LandViewDetailsComponent implements OnInit {

  par = "";
  constructor(private route: ActivatedRoute, private farmsService: FarmsRouteService) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      console.log(params['id']);
      //console.log(this.farmsService.getFarmDetails(params['id']));
    });
  }

}
