import { VehicleService } from './../../../shared/services/vehicle.service';
import { Component, OnInit, AfterViewInit, OnDestroy, Input, ChangeDetectionStrategy } from '@angular/core';

import { Subscription } from 'rxjs';

import { Vehicle } from './../../../shared/model/vehicle.model';


@Component({
  selector: 'app-vehicle-grid',
  templateUrl: './vehicle-grid.component.html',
  styleUrls: ['./vehicle-grid.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class VehicleGridComponent implements OnInit {
  @Input() vehicleList: Vehicle[];
 

  constructor() {}

  ngOnInit() {
    
    
   }

}
