import { FormGroup } from '@angular/forms';
import { VehicleService } from './../../../shared/services/vehicle.service';
import { OnInit, OnDestroy, Component , Input, EventEmitter, Output} from '@angular/core';



@Component({
  selector: 'app-vehicle-form',
  templateUrl: './vehicle-form.component.html',
  styleUrls: ['./vehicle-form.component.css']
})
export class VehicleFormComponent implements OnInit, OnDestroy {

  @Input() form: FormGroup;
  @Input() isEdit: boolean;
  @Input() vehicleType: any;
  @Input() vehicleProps:any;

  @Output() cancel: EventEmitter<any> = new EventEmitter<any>();
  

 
   constructor() {

   }

  ngOnInit() {
   
    
   }

   onCancel(){
    this.cancel.emit();
   }

   ngOnDestroy() {
   
  }

}
