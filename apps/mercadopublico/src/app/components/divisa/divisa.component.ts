import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Divisa } from '../../modelos/divisa';

@Component({
  selector: 'app-divisa',
  templateUrl: './divisa.component.html',
  styleUrls: ['./divisa.component.css']
})
export class DivisaComponent implements OnInit {
  @Input() divisa: Divisa;
  @Output() cambio = new EventEmitter<Divisa>();
  valor: any;
  constructor() {}

  ngOnInit() {
    this.EndDateChange(this.divisa.fecha);
  }

  EndDateChange(event): void {
    this.divisa.fecha = new FormControl(new Date(event.value).toISOString());
    console.log(this.divisa.fecha.value);
    this.cambio.emit(this.divisa);
  }
}
