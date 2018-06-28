import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  nombre: string;
  position: number;
  RUT: number;
  id_proveedor: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, nombre: 'Hydrogen', RUT: 1.0079, id_proveedor: 'H' },
  { position: 2, nombre: 'Helium', RUT: 4.0026, id_proveedor: 'He' },
  { position: 3, nombre: 'Lithium', RUT: 6.941, id_proveedor: 'Li' },
  { position: 4, nombre: 'Beryllium', RUT: 9.0122, id_proveedor: 'Be' },
  { position: 5, nombre: 'Boron', RUT: 10.811, id_proveedor: 'B' },
  { position: 6, nombre: 'Carbon', RUT: 12.0107, id_proveedor: 'C' },
  { position: 7, nombre: 'Nitrogen', RUT: 14.0067, id_proveedor: 'N' },
  { position: 8, nombre: 'Oxygen', RUT: 15.9994, id_proveedor: 'O' },
  { position: 9, nombre: 'Fluorine', RUT: 18.9984, id_proveedor: 'F' },
  { position: 10, nombre: 'Neon', RUT: 20.1797, id_proveedor: 'Ne' }
];

@Component({
  selector: 'app-proveedores',
  templateUrl: './proveedores.component.html',
  styleUrls: ['./proveedores.component.css']
})
export class ProveedoresComponent implements OnInit {
  cards = [
    { title: 'Proveedores', cols: 2, rows: 2 },
    { title: 'Card 2', cols: 1, rows: 1 },
    { title: 'Card 3', cols: 2, rows: 2 },
    { title: 'Card 4', cols: 2, rows: 1 }
  ];
  displayedColumns: string[] = ['position', 'RUT', 'nombre', 'id_proveedor'];
  dataSource = ELEMENT_DATA;

  constructor() {}

  ngOnInit() {}
}
