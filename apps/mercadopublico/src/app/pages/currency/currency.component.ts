import { Currency } from './../../modelos/currency';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { CurrencyService } from './../../services/currency.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-currency',
  templateUrl: './currency.component.html',
  styleUrls: ['./currency.component.css']
})
export class CurrencyComponent implements OnInit {
  valorCLP: Currency;
  fecha: FormControl;
  fechaInicio = new Date(2015, 0, 1);
  fechaFin = new Date();

  constructor(private currencyService: CurrencyService) {}

  ngOnInit() {
    this.fecha = new FormControl(new Date().toISOString());
    this.consultarCLP();
  }

  consultarCLP(): void {
    this.currencyService
      .getDolarAPesosHistorico(this.fecha.value.slice(0, 10))
      .subscribe(moneda => (this.valorCLP = moneda));
  }

  EndDateChange(event): void {
    this.fecha = new FormControl(new Date(event.value).toISOString());
    this.consultarCLP();
  }
}
