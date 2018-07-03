export class MPCompradores {
  Cantidad: number;
  FechaCreacion: string;
  listaEmpresas: ListaEmpresa[];
}

interface ListaEmpresa {
  CodigoEmpresa: string;
  NombreEmpresa: string;
}
