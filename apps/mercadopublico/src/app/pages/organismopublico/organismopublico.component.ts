import { map, takeUntil } from 'rxjs/operators';
import { Organismo } from './../../modelos/organismopublico';
import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable, Subject } from 'rxjs';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-organismopublico',
  templateUrl: './organismopublico.component.html',
  styleUrls: ['./organismopublico.component.css']
})
export class OrganismopublicoComponent implements OnInit {
  organismospublicos: Observable<any[]>;
  ELEMENT_DATA: Organismo[];
  displayedColumns = ['CodigoEmpresa', 'NombreEmpresa', 'habilitado'];
  dataSource: any;
  destroy$: Subject<void> = new Subject();
  db: AngularFireDatabase;
  title: string;
  constructor(db: AngularFireDatabase) {
    //this.organismospublicos =
    this.db = db;
    this.title = 'Organismos Publicos';
  }
  //this.ELEMENT_DATA = this.organismospublicos;

  ngOnInit() {
    // this.organismospublicos.subscribe(row => {
    //   this.ELEMENT_DATA = row as Organismo[];
    // });
    // this.dataSource = new MatTableDataSource(this.ELEMENT_DATA);
    this.dataSource = new MatTableDataSource([]);
    this.db
      .list('compradores/listaEmpresas')
      .valueChanges()
      .pipe(takeUntil(this.destroy$)) // Complete & cleanup
      .subscribe(data => (this.dataSource.data = data));
  }
  ngOnDestroy() {
    this.destroy$.next();
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
