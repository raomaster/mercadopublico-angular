import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainDashComponent } from '../pages/main-dash/main-dash.component';
import { ProveedoresComponent } from '../pages/proveedores/proveedores.component';
import { InicioComponent } from '../inicio/inicio.component';

const routes: Routes = [];
const appRoutes: Routes = [
  { path: 'inicio', component: InicioComponent },
  // { path: 'hero/:id', component: HeroDetailComponent },
  {
    path: 'proveedores',
    component: ProveedoresComponent
    // data: { title: 'Heroes List' }
  },
  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    component: MainDashComponent
    // redirectTo: '/inicio'
    // pathMatch: 'full'
  }
  // { path: '**', component: PageNotFoundComponent }
];

// const appRoutes: Routes = [
//   { path: 'inicio', component: InicioComponent },
//   // { path: 'hero/:id', component: HeroDetailComponent },
//   {
//     path: 'proveedores',
//     component: ProveedoresComponent
//     // data: { title: 'Heroes List' }
//   },
//   {
//     path: '',
//     redirectTo: 'inicio',
//     pathMatch: 'full'
//   },
//   {
//     path: 'dashboard',
//     component: MainDashComponent
//     // redirectTo: '/inicio'
//     // pathMatch: 'full'
//   }
//   // { path: '**', component: PageNotFoundComponent }
// ];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class RoutesRoutingModule {}
