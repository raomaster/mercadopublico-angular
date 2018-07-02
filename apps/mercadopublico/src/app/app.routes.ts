import { Routes, RouterModule } from '@angular/router';

import { PagesComponent } from './pages/pages.component';
import { LoginComponent } from './login/login.component';
import { NopagefoundComponent } from './shared/nopagefound/nopagefound.component';
import { MainDashComponent } from './pages/main-dash/main-dash.component';
import { ProveedoresComponent } from './pages/proveedores/proveedores.component';
import { InicioComponent } from './inicio/inicio.component';
import { CurrencyComponent } from './pages/currency/currency.component';

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
      { path: 'moneda', component: CurrencyComponent },
      { path: '**', component: NopagefoundComponent }
    ]
  }
];

export const APP_ROUTES = RouterModule.forRoot(
  appRoutes,
  { enableTracing: true } // <-- debugging purposes only
);
