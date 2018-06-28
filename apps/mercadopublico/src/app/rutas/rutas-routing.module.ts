import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { PagesComponent } from '../pages/pages.component';
import { MainDashComponent } from '../pages/main-dash/main-dash.component';
import { InicioComponent } from '../inicio/inicio.component';
import { ProveedoresComponent } from '../pages/proveedores/proveedores.component';
import { NopagefoundComponent } from '../shared/nopagefound/nopagefound.component';

const appRoutes: Routes = [
  { path: 'login', component: LoginComponent, pathMatch: 'full' },
  {
    path: '',
    component: PagesComponent,
    children: [
      { path: 'dashboard', component: MainDashComponent },
      { path: 'inicio', component: InicioComponent },
      { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
      {
        path: 'proveedores',
        component: ProveedoresComponent
      },
      { path: '**', component: NopagefoundComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(appRoutes)],
  exports: [RouterModule]
})
export class RutasRoutingModule {}
