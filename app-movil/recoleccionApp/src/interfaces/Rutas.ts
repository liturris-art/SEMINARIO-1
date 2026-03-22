// Interfaz para Ruta - usada en servicios que conectan con API del docente
export interface Ruta {
  id?: string;
  perfil_id: string;
  nombre_ruta: string;
  color_hex?: string;
  shape?: string;
}
