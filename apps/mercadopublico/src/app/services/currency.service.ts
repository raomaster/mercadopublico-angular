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
}
