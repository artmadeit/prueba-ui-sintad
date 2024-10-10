export interface TipoDocumentoForm {
    codigo: string;
    nombre: string;
    descripcion: string;
}

export interface TipoDocumento extends TipoDocumentoForm {
    id: number;
}