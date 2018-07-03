import { FormControl } from '@angular/forms';

export class Divisa {
  titulo: string;
  cuerpo: string;
  fecha: FormControl;
  fechaInicio: Date = new Date(2015, 0, 1);
  fechaFin: Date = new Date();
  valor: string = '';
}
