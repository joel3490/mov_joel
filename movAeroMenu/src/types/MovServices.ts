import { string, object, optional } from "valibot";

export const ValidarMovSchema = object({
    fecha: string(),
    idAvion: string(),
    modelo: string(),
    propietario: string(),
    procedencia: string(),
    destino: optional(string()),
    horaDespegue: string(),
    horaArribo: optional(string()),
    ruta: string(),
    nroVuelo: string(),
    obs: optional(string()),
    idControlador: string(),
    nivel: string(),
    eobt: string(),
    pistaProcedencia: optional (string()),
    destProcedencia: optional(string()),
    calleProcedencia: optional(string()),
    destArribo: optional(string()),
    calleArribo: optional(string()),
    pistaArribo: optional(string()),    
    estado: optional(string())
});

type MovData = {
  [key: string]: FormDataEntryValue;
};

export function validarCampos(data: MovData): string | null {
  // Define los campos que son obligatorios
  const requiredFields = [
    "fecha",
    "idAvion",
    "procedencia",
    "horaDespegue",
    "ruta",
    "nroVuelo",
    "idControlador",
    "nivel",
    "eobt",
    "pistaProcedencia",
    "calleProcedencia",
  ];

  for (const field of requiredFields) {
    const value = data[field];
    
    if (typeof value === "string" && value.trim() === "") {
      return `El campo ${field} es obligatorio y no puede estar vacío.`;
    }
  }
  return null;
}
