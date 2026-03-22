// Interfaz para Vehiculo - conecta con la API del docente
export interface Vehiculo {
  id?: string;
  perfil_id: string;
  placa: string;
  marca: null | string;
  modelo: null | string;
  activo: boolean;
}
