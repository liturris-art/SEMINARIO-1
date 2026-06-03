// Interfaz alineada con la API del docente (ProfeLucio/apirecoleccion)
export interface Ruta {
  id?: string;
  perfil_id: string;
  nombre_ruta: string;
  color_hex?: string;

  // Caso B: geometría directa en GeoJSON
  shape?: GeoJsonLineString | string;

  // Caso A: lista de IDs de calles para unir
  calles_ids?: string[];
}

export interface GeoJsonLineString {
  type: 'LineString';
  coordinates: [number, number][]; // [longitud, latitud]
}
