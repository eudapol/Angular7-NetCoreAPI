import {Vehicle, Car, Boat, VehicleType, CurrentVehicle, VehicleProps} from '../model/vehicle.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { of  } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {
    baseUrl = 'http://localhost:5000/api/vehicles';
    private vehicleList: Vehicle[];


constructor() { }


  getVehicleTypes() {
    //const vehicleTypes = this.http.get<string[]>(this.baseUrl + '/types');
    return of(['CAR','BOAT']);
  }

  getAllVehicles(): Observable<any[]> {
    return of([{id: 1,make:'Suzuki', model:'Swift', vehicleType:'CAR'},
               {id: 2, make:'Honda', model:'City', vehicleType:'CAR'},
               {id: 3, make:'Huandai', model:'Santro', vehicleType:'CAR'},
               {id: 3, make:'Boat1', model:'Boat1_model', vehicleType:'BOAT'},
               {id: 3, make:'Boat2', model:'Boat2_model', vehicleType:'BOAT'}]);
    //return this.http.get<Vehicle[]>(this.baseUrl);
  }
  getVehicleProps(type: string) {

    if(type == 'CAR'){
      return of([
        {name: "id", datatype: "",order: 1 , regex: "" , required: true},
        {name: "model", datatype: "",order: 2 , regex: "" , required: true},
        {name: "make", datatype: "",order: 3 , regex: "" , required: true},
        {name: "vehicleType", datatype: "",order: 4 , regex: "" , required: true},
        {name: "doors", datatype: "",order: 5 , regex: "" , required: true},
        {name: "engine", datatype: "",order: 6 , regex: "" , required: true},
        {name: "wheels", datatype: "",order: 7 , regex: "" , required: true},
        {name: "bodyType", datatype: "",order: 8 , regex: "" , required: true}
        
        ]);
    }else if(type === 'BOAT'){
      return of([
        {name: "id", datatype: "",order: 1 , regex: "" , required: true},
        {name: "model", datatype: "",order: 2 , regex: "" , required: true},
        {name: "make", datatype: "",order: 3 , regex: "" , required: true},
        {name: "vehicleType", datatype: "",order: 4 , regex: "" , required: true},
        {name: "storey", datatype: "",order: 5 , regex: "" , required: true},
        {name: "seats", datatype: "",order: 6 , regex: "" , required: true}
        
        ]);
    }
     
  }

  createOrUpdateVehicle(vehicle: any, isEdit: boolean): Observable<string> {
    // if(isEdit)
    //   return this.http.put<string>(this.baseUrl + '/update', vehicle);
    // else
    //   return this.http.post<any>(this.baseUrl + '/add', vehicle);
    return of("success");
  }

  getVehicle(vehicleType: string, id: number): Observable<any> {
     return of({"id": 3, 
     "model" : "Houndai",
     "make" :"Santro",
     "vehicleType" : "CAR",
     "doors" : 4,
     "engine" : "very fast",
     "wheels" : 4,
     "bodyType" : "Iron"});
    
     //return this.http.get<Vehicle>(this.baseUrl + '/' + vehicleType + '/' + id);
  }


}
