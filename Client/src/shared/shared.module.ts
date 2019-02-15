import { DropdownDirective } from './../shared/directive/dropdowndirective';
import { CustompipePipe } from './../shared/pipes/custompipe.pipe';
import { VehicleService } from './../shared/services/vehicle.service';
import { CommonModule } from '@angular/common';
import { NgModule, ModuleWithProviders } from '@angular/core';


@NgModule({
  declarations: [
    CustompipePipe,
    DropdownDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [CustompipePipe,
    DropdownDirective]
})
export class SharedModule { 

    static forRoot(): ModuleWithProviders{
        return {
            ngModule: SharedModule,
            providers :[ VehicleService ]
        };
    }
}
