export class MPLiciatacion {
  Cantidad: number;
  FechaCreacion: string;
  Version: string;
  Listado: Listado2[];
}

interface Listado2 {
  CodigoExterno: string;
  Nombre: string;
  CodigoEstado: number;
  Descripcion: string;
  FechaCierre?: any;
  Estado: string;
  Comprador: Comprador;
  DiasCierreLicitacion: string;
  Informada: number;
  CodigoTipo: number;
  Tipo: string;
  TipoConvocatoria: string;
  Moneda: string;
  Etapas: number;
  EstadoEtapas: string;
  TomaRazon: string;
  EstadoPublicidadOfertas: number;
  JustificacionPublicidad: string;
  Contrato: string;
  Obras: string;
  CantidadReclamos: number;
  Fechas: Fechas;
  UnidadTiempoEvaluacion: number;
  DireccionVisita: string;
  DireccionEntrega: string;
  Estimacion: number;
  FuenteFinanciamiento: string;
  VisibilidadMonto: number;
  MontoEstimado?: any;
  Tiempo: string;
  UnidadTiempo: string;
  Modalidad: number;
  TipoPago: string;
  NombreResponsablePago: string;
  EmailResponsablePago: string;
  NombreResponsableContrato: string;
  EmailResponsableContrato: string;
  FonoResponsableContrato: string;
  ProhibicionContratacion: string;
  SubContratacion: string;
  UnidadTiempoDuracionContrato: number;
  TiempoDuracionContrato: string;
  TipoDuracionContrato: string;
  JustificacionMontoEstimado: string;
  ObservacionContract?: any;
  ExtensionPlazo: number;
  EsBaseTipo: number;
  UnidadTiempoContratoLicitacion: string;
  ValorTiempoRenovacion: string;
  PeriodoTiempoRenovacion: string;
  EsRenovable: number;
  Adjudicacion: Adjudicacion;
  Items: Items;
}

interface Items {
  Cantidad: number;
  Listado: Listado[];
}

interface Listado {
  Correlativo: number;
  CodigoProducto: number;
  CodigoCategoria: string;
  Categoria: string;
  NombreProducto: string;
  Descripcion: string;
  UnidadMedida: string;
  Cantidad: number;
  Adjudicacion?: Adjudicacion2;
}

interface Adjudicacion2 {
  RutProveedor: string;
  NombreProveedor: string;
  Cantidad: number;
  MontoUnitario: number;
}

interface Adjudicacion {
  Tipo: number;
  Fecha: string;
  Numero: string;
  NumeroOferentes: number;
  UrlActa: string;
}

interface Fechas {
  FechaCreacion: string;
  FechaCierre: string;
  FechaInicio: string;
  FechaFinal: string;
  FechaPubRespuestas: string;
  FechaActoAperturaTecnica: string;
  FechaActoAperturaEconomica: string;
  FechaPublicacion: string;
  FechaAdjudicacion: string;
  FechaEstimadaAdjudicacion: string;
  FechaSoporteFisico?: any;
  FechaTiempoEvaluacion?: any;
  FechaEstimadaFirma?: any;
  FechasUsuario?: any;
  FechaVisitaTerreno?: any;
  FechaEntregaAntecedentes?: any;
}

interface Comprador {
  CodigoOrganismo: string;
  NombreOrganismo: string;
  RutUnidad: string;
  CodigoUnidad: string;
  NombreUnidad: string;
  DireccionUnidad: string;
  ComunaUnidad: string;
  RegionUnidad: string;
  RutUsuario: string;
  CodigoUsuario: string;
  NombreUsuario: string;
  CargoUsuario: string;
}
