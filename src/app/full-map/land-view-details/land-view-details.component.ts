import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { FarmDataService } from 'src/app/farms/farm-data.service';
import { FarmsRouteService } from 'src/app/farms/farms-route.service';

@Component({
  selector: 'app-land-view-details',
  templateUrl: './land-view-details.component.html',
  styleUrls: ['./land-view-details.component.css']
})
export class LandViewDetailsComponent implements OnInit {
  
  farmData = {
    name: ' ',
    size: ' ',
    description: ' random ',
    uses: ' ',
    access: ' ',
    propertymap: ' ',
    features: ' ',
    image: []
  };
  hasData:boolean = false;
  isLoading:boolean = false;

  constructor(private route: ActivatedRoute, private farmDataService: FarmDataService) {}

  ngOnInit(): void {
    
    this.route.params.subscribe((params: Params) => {
      if(params) {
        this.isLoading = true;
        const res = this.farmDataService.getFarmData(params['id']);
        if(res == null) {
          this.hasData = false;
        } else {
          this.hasData = true;
          this.farmData = res[0];
        }
        this.isLoading = false;
        console.log(this.farmData);
      } 
    });
  }

}
