import { element } from 'protractor';
import { takeUntil, map } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Subject, Observable, BehaviorSubject } from 'rxjs';
import { MatTableDataSource } from '@angular/material';
import { FirebaseListObservable } from 'angularfire2/database-deprecated';

@Component({
  selector: 'app-organismopublico',
  templateUrl: './organismopublico.component.html',
  styleUrls: ['./organismopublico.component.css']
})
export class OrganismopublicoComponent implements OnInit {
  displayedColumns = ['CodigoEmpresa', 'NombreEmpresa', 'habilitado'];
  dataSource: any;
  destroy$: Subject<void> = new Subject();
  db: AngularFireDatabase;
  title: string;
  organismos: FirebaseListObservable<any[]>;
  items: Observable<any[]>;
  size$: BehaviorSubject<string | null>;

  constructor(db: AngularFireDatabase) {
    this.db = db;
    this.title = 'Organismos Publicos';
  }

  ngOnInit() {
    this.dataSource = new MatTableDataSource([]);
    this.db
      .list('compradores/listaEmpresas')
      .snapshotChanges()
      .pipe(
        map(changes =>
          changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
        )
        //takeUntil(this.destroy$)) // Complete & cleanup
      )
      .subscribe(data => (this.dataSource.data = data));
  }
  ngOnDestroy() {
    this.destroy$.next();
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  cambio(elemento) {
    // console.log(elemento);
    elemento.habilitado = !elemento.habilitado;
    // this.db.object('compradores/listaEmpresas/CodigoEmpresa').set(elemento);
    this.db.list('compradores/listaEmpresas').update(elemento.key, {
      CodigoEmpresa: elemento.CodigoEmpresa,
      NombreEmpresa: elemento.NombreEmpresa,
      habilitado: elemento.habilitado
    });
  }
}
