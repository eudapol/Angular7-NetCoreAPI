import { VehicleService } from './../../../shared/services/vehicle.service';
import { Component, OnInit, AfterViewInit, OnDestroy } from '@angular/core';

import { Subscription } from 'rxjs';

import { Vehicle } from './../../../shared/model/vehicle.model';


@Component({
  selector: 'app-vehiclelist',
  templateUrl: './vehicle-list.component.html',
  styleUrls: ['./vehicle-list.component.css']
})
export class VehicleListComponent implements OnInit, OnDestroy {
  vehicleList: Vehicle[];
  private subscription: Subscription;
  public Loading = false;
  private vehicleTypes$ : any;

  constructor(private vehicleService: VehicleService) {}

  ngOnInit() {
    this.Loading = true;
    this.vehicleTypes$ = this.vehicleService.getVehicleTypes();
   
      this.subscription = this.vehicleService.getAllVehicles().subscribe(data => {
        this.vehicleList = data;
        this.Loading = false;
        });
    
   }

   ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
