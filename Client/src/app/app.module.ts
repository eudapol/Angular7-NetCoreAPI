import { VehiclesModule } from './../vehicles/vehicles.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppHeaderComponent } from './components/app-header/app-header.component';
import { AppComponent } from './components/app/app.component';


import {Routes, RouterModule} from '@angular/router';

const appRoute: Routes = [{ path: '', pathMatch: 'full', redirectTo: 'vehicles'}];

@NgModule({
  declarations: [
    AppComponent,
    AppHeaderComponent,
   ],
  imports: [
    BrowserModule,
    VehiclesModule,
    RouterModule.forRoot(appRoute)
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
