import { VehicleService } from './../../../shared/services/vehicle.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Subscription , forkJoin} from 'rxjs';

@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.css']
})
export class VehicleComponent implements OnInit, OnDestroy {
  id: any;
  vehicleType:any;
  vehicle:any;
  form: FormGroup = new FormGroup({});
  
  vehicleProps: any;
  immutableProps:any = ['Id', 'VehicleType'];
  isEdit: boolean;


  constructor(private route: ActivatedRoute, private router: Router, 
              private vehicleService: VehicleService) {}

  ngOnInit() {

    this.id = this.route.snapshot.params['id'];
    this.vehicleType = this.route.snapshot.params['vehicleType'];
    this.isEdit = this.id ? true: false;
    let observables: any = [];
    const vehicleProps$ = this.vehicleService.getVehicleProps(this.vehicleType);
    observables.push(vehicleProps$);
    if(this.isEdit){
      const vehicle$ = this.vehicleService.getVehicle(this.vehicleType, this.id);
      observables.push(vehicle$);
    }
    

    forkJoin(...observables)
            .subscribe( (valueArray: any) => {
                this.vehicleProps = valueArray[0];
                if(this.isEdit){
                  this.vehicle = valueArray[1];
                }

                this.buildForm();
            });
  }


  buildForm() {
   
    const desiredProps = this.vehicleProps.filter(prop => !this.immutableProps.includes(prop.name));

    if(this.isEdit){
      desiredProps.forEach(prop => {
        prop['value'] = this.vehicle[prop['name']];
      });
    }
    

    let formGroup = {};
    for (const prop of desiredProps) {
      if(this.isEdit)
        formGroup[prop['name']] = new FormControl(prop['value']);
      else
        formGroup[prop['name']] = new FormControl('');
    }

    formGroup['vehicleType'] = new FormControl(this.vehicleType);

    if(this.isEdit)
      formGroup['id'] = new FormControl(this.id);
    
    this.form = new FormGroup(formGroup);
  }

  onSubmit() {
      this.vehicleService.createOrUpdateVehicle(this.form.value, this.isEdit).subscribe(data => {
      });

    this.router.navigate(['']);
  }

  cancel() {
    this.router.navigate(['../']);
  }

  ngOnDestroy() {
    
  }
}
