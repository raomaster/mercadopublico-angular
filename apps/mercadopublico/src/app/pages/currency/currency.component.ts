import { Divisa } from './../../modelos/divisa';
import { DivisaComponent } from './../../components/divisa/divisa.component';
import { SBIFUF } from './../../modelos/sbifuf';
import { Currency } from './../../modelos/currency';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { CurrencyService } from './../../services/currency.service';
import { FormControl } from '@angular/forms';
import { SBIFUTM } from '../../modelos/sbifutm';

@Component({
  selector: 'app-currency',
  templateUrl: './currency.component.html',
  styleUrls: ['./currency.component.css']
})
export class CurrencyComponent implements OnInit {
  valorCLP: Currency;
  valorUFCLP: SBIFUF;
  valorUTM: SBIFUTM;
  fecha: FormControl;
  fechaUF: FormControl;
  fechaInicio = new Date(2015, 0, 1);
  fechaFin = new Date();
  calcularCLPBound: Function;
  divisaUTM: Divisa = {
    titulo: 'UTM',
    cuerpo: 'Prueba',
    fecha: new FormControl(new Date().toISOString()),
    fechaFin: this.fechaFin,
    fechaInicio: this.fechaInicio,
    valor: '.'
  };

  constructor(private currencyService: CurrencyService) {
    this.fecha = new FormControl(new Date().toISOString());
    this.fechaUF = new FormControl(new Date().toISOString());
    // this.calcularCLPBound = this.consultaPruebaCLP();
  }

  ngOnInit() {
    this.consultarCLP();
    this.consultarUFCLP();
    //this.consultarUTMCLP(this.divisaUTM);
    console.log(this.divisaUTM);
  }

  consultarCLP(): void {
    this.currencyService
      .getDolarAPesosHistorico(this.fecha.value.slice(0, 10))
      .subscribe(moneda => (this.valorCLP = moneda));
  }
  consultarUFCLP(): void {
    this.currencyService
      .getUFAPesosHistorico(new Date(this.fechaUF.value))
      .subscribe(moneda => (this.valorUFCLP = moneda));
  }

  EndDateChange(event): void {
    this.fecha = new FormControl(new Date(event.value).toISOString());
    this.consultarCLP();
  }

  EndUFDateChange(event): void {
    this.fechaUF = new FormControl(new Date(event.value).toISOString());
    console.log(this.fechaUF.value);
    this.consultarUFCLP();
  }

  consultarUTMCLP(event: Divisa) {
    //console.log(event);
    this.currencyService
      .getUTMAPesosHistorico(new Date(event.fecha.value))
      .subscribe(moneda => (this.divisaUTM.valor = moneda.UTMs[0].Valor));
  }
}
