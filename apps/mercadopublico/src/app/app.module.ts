import { CdkTableModule } from '@angular/cdk/table';
import { CdkTreeModule } from '@angular/cdk/tree';
import { MatTableModule } from '@angular/material/table';
import { Graficas1Component } from './pages/graficas1/graficas1.component';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { PagesComponent } from './pages/pages.component';
import { APP_ROUTES } from './app.routes';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { NxModule } from '@nrwl/nx';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainNavComponent } from './shared/main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireStorageModule } from 'angularfire2/storage';
import { environment } from '../environments/environment';

import { InicioComponent } from './inicio/inicio.component';
import { LoginComponent } from './login/login.component';
import { NopagefoundComponent } from './shared/nopagefound/nopagefound.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ProgressComponent } from './pages/progress/progress.component';
import { HeaderComponent } from './shared/header/header.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { BreadcrumbsComponent } from './shared/breadcrumbs/breadcrumbs.component';
import { ProveedoresComponent } from './pages/proveedores/proveedores.component';
import { MainDashComponent } from './pages/main-dash/main-dash.component';
import { GraficoTortaComponent } from './components/grafico-torta/grafico-torta.component';
import { HttpClientModule } from '@angular/common/http';
import { CurrencyComponent } from './pages/currency/currency.component';
import { OrganismopublicoComponent } from './pages/organismopublico/organismopublico.component';
import { DivisaComponent } from './components/divisa/divisa.component';

import {
  MatAutocompleteModule,
  MatBadgeModule,
  MatBottomSheetModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatDividerModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatStepperModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatTreeModule,
  DateAdapter
} from '@angular/material';
@NgModule({
  exports: [
    CdkTableModule,
    CdkTreeModule,
    MatAutocompleteModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatStepperModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    //MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    //MatProgressSpinnerModule,
    MatRadioModule,
    //MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatTreeModule,
    MatNativeDateModule
  ],
  declarations: []
})
export class MaterialModule {}

@NgModule({
  exports: []
})
export class FireBaseModule {}

@NgModule({
  declarations: [
    AppComponent,
    MainNavComponent,
    InicioComponent,
    LoginComponent,
    NopagefoundComponent,
    DashboardComponent,
    ProgressComponent,
    Graficas1Component,
    HeaderComponent,
    SidebarComponent,
    BreadcrumbsComponent,
    ProveedoresComponent,
    MainDashComponent,
    PagesComponent,
    GraficoTortaComponent,
    CurrencyComponent,
    DivisaComponent,
    OrganismopublicoComponent
  ],
  imports: [
    BrowserModule,
    NxModule.forRoot(),
    BrowserAnimationsModule,
    LayoutModule,
    FormsModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    //MatNativeDateModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatTableModule,
    APP_ROUTES,
    HttpClientModule,
    MaterialModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features,
    AngularFireStorageModule, // imports firebase/storage only needed for storage features
    AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  // Injeccion para poner la fecha en formato local
  constructor(private dateAdapter: DateAdapter<Date>) {
    dateAdapter.setLocale('es-cl'); // DD/MM/YYYY
  }
}
