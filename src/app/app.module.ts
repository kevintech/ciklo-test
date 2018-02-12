import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from "@angular/router"
import { AppComponent } from './app.component';
import { TruckComponent } from './truck/truck.component';
import { DriverComponent } from './driver/driver.component';
import { PackageComponent } from './package/package.component';
import { TruckNewComponent } from './truck-new/truck-new.component';

const appRoutes:Routes = [
  {
    path: "drivers",
    component: DriverComponent,
    data: { title: "Pilotos" }
  },
  {
    path: "packages",
    component: PackageComponent,
    data: { title: "Paquetes" }
  },
  {
    path: "trucks",
    component: TruckComponent,
    data: { title: "Flotilla" }
  },
  {
    path: "trucks/new",
    component: TruckNewComponent,
    data: { title: "Agregar Camión" }
  }
]

@NgModule({
  declarations: [
    AppComponent,
    TruckComponent,
    DriverComponent,
    PackageComponent,
    TruckNewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
