import { SBIFUTM } from './../modelos/sbifutm';
import { SBIFUF } from './../modelos/sbifuf';
import { Currency } from './../modelos/currency';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {
  private currency: Currency;

  constructor(private http: HttpClient) {}

  getDolarAPesosHistorico(fecha: string): Observable<Currency> {
    let consulta: string;
    consulta =
      environment.currency.baseUrl +
      fecha +
      '.json' +
      '?app_id=' +
      environment.currency.token +
      '&base=USD&symbols=CLP';
    console.log(consulta);
    return this.http.get<Currency>(consulta);
  }

  getUFAPesosHistorico(fecha: Date): Observable<SBIFUF> {
    let consulta: string;
    console.log(fecha.getDay() + 1);
    consulta = `${environment.sbif.baseUrl}uf/${fecha.getFullYear()}/${(
      '0' +
      (fecha.getMonth() + 1)
    ).slice(-2)}/dias/${('0' + (fecha.getDay() + 1)).slice(-2)}?apikey=${
      environment.sbif.token
    }&formato=json`;
    console.log(consulta);
    return this.http.get<SBIFUF>(consulta);
  }

  getUTMAPesosHistorico(fecha: Date): Observable<SBIFUTM> {
    let consulta: string;
    consulta = `${environment.sbif.baseUrl}utm/${fecha.getFullYear()}/${(
      '0' +
      (fecha.getMonth() + 1)
    ).slice(-2)}?apikey=${environment.sbif.token}&formato=json`;
    console.log(consulta);
    return this.http.get<SBIFUTM>(consulta);
  }
}
