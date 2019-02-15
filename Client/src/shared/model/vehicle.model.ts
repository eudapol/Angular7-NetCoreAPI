export enum VehicleType {
  CAR,
  BOAT,
}

export   interface VehicleProps {
  name: string;
  datatype: string;
  order: number;
  regex: string;
  required: boolean;
  value: any;

  // constructor(public _Name: string, public _Datatype: string,
  //   public _Order: number, public _Regex: string, public _Required: boolean,public _Value: any) {
  //   this.Name = _Name;
  //   this.Datatype = _Datatype;
  //   this.Order = _Order;
  //   this.Regex = _Regex;
  //   this.Required = _Required;
  //   this.Value = _Value;
  // }
}

export  interface Vehicle {
  id: number;
  model: string;
  make: string;
  vehicleType: VehicleType;
}
export interface Car extends Vehicle {
  doors: number;
  engine: string;
  wheels: number;
  bodytype: string;
}

export interface Boat extends Vehicle {
  storey: number;
  seats: number;
}

export class CurrentVehicle {
  Id: number;
  VehicleType: VehicleType;
  constructor(public _id: number, public _vehicleType: VehicleType) {
    this.Id = _id;
    this.VehicleType = _vehicleType;
  }
}