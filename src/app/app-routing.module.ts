import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaisesPoblados10Component } from './paises-poblados10/paises-poblados10.component';
import { Paises5Component } from './paises5/paises5.component';
import { Ejercicio4Component } from './ejercicio4/ejercicio4.component';
import { Ejercicio5Component } from './ejercicio5/ejercicio5.component';
import { Ejercicio6Component } from './ejercicio6/ejercicio6.component';
import { DashboardComponent } from './dashboard/dashboard.component';


const routes: Routes = [
  {path: "paises-poblados10", component: PaisesPoblados10Component},
  {path: "paises5", component: Paises5Component},
  {path: "ejercico4", component: Ejercicio4Component},
  {path: "ejercico5", component: Ejercicio5Component},
  {path: "ejercicio6", component: Ejercicio6Component},
  {path: "dashboard", component: DashboardComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
