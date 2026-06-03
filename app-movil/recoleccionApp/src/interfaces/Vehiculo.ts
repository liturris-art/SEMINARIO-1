// Interfaz alineada con la API del docente (ProfeLucio/apirecoleccion)
// POST /api/vehiculos requiere: placa, marca, modelo, activo, perfil_id — todos obligatorios
export interface Vehiculo {
  id?: string;
  perfil_id: string;
  placa: string;
  marca: string;
  modelo: string;
  activo: boolean;
}
