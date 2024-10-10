import { TipoContribuyente } from "../tipo-contribuyente/tipo-contribuyente";
import { TipoDocumento } from "../tipo-documento/tipo-documento";

export interface Entidad {
    id: number;

    tipoDocumento: TipoDocumento;

    nroDocumento: string;

    razonSocial: string;

    nombreComercial: string;

    tipoContribuyente: TipoContribuyente;

    direccion: string;

    telefono: string;
}