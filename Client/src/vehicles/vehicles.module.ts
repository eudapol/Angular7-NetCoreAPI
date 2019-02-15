import { VehicleGridComponent } from './components/vehicle-grid/vehicle-grid.component';
import { VehicleFormComponent } from './components/vehicle-form/vehicle-form.component';
import { VehicleListComponent } from './containers/vehicle-list/vehicle-list.component';
import { VehicleComponent } from './containers/vehicle/vehicle.component';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from './../shared/shared.module';
import { DropdownDirective } from './../shared/directive/dropdowndirective';
import { CustompipePipe } from './../shared/pipes/custompipe.pipe';

import { VehicleService } from './../shared/services/vehicle.service';
import { CommonModule } from '@angular/common';
import { NgModule, ModuleWithProviders, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';


export const ROUTES: Routes = [
  { path: 'vehicles',
    children : [
        { path: '', component: VehicleListComponent },
        { path: 'add/:vehicleType', component: VehicleComponent },
        { path: 'edit/:vehicleType/:id', component: VehicleComponent }
   ]},
 
];

@NgModule({
  declarations: [
    VehicleListComponent,
    VehicleComponent,
    VehicleGridComponent,
    VehicleFormComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES),
    SharedModule.forRoot(),
    ReactiveFormsModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class VehiclesModule { 
}
