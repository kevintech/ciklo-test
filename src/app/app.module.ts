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
import { DriverNewComponent } from './driver-new/driver-new.component';
import { PackageNewComponent } from './package-new/package-new.component';
import { TruckEditComponent } from './truck-edit/truck-edit.component';

const appRoutes:Routes = [
  {
    path: "drivers",
    component: DriverComponent,
    data: { title: "Pilotos" }
  },
  {
    path: "drivers/new",
    component: DriverNewComponent,
    data: { title: "Agregar Piloto" }
  },
  {
    path: "packages",
    component: PackageComponent,
    data: { title: "Paquetes" }
  },
  {
    path: "packages/new",
    component: PackageNewComponent,
    data: { title: "Agregar Paquete" }
  },
  {
    path: "trucks",
    component: TruckComponent,
    data: { title: "Flotilla" }
  },
  {
    path: "trucks/:id",
    component: TruckEditComponent,
    data: { title: "Editar Camión" }
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
    TruckNewComponent,
    DriverNewComponent,
    PackageNewComponent,
    TruckEditComponent
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
