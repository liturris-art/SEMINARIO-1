-- ═══════════════════════════════════════════════════════════════
-- Tabla faltante: recorridos_programados
--
-- El código (src/app/services/recorridos/recorridos.service.ts,
-- método registrarRutaProgramada / getRecorridosLocales) asume que
-- esta tabla existe, pero no está creada en el proyecto real de
-- Supabase — se confirmó consultando la API REST directamente
-- (PostgREST responde "Could not find the table
-- 'public.recorridos_programados'").
--
-- Efecto del bug: el botón "Guardar ruta" (home-conductor) nunca
-- persiste nada aquí (el error se traga con console.warn), y esa
-- mitad de los datos de Historial/Reportes siempre viene vacía.
--
-- CÓMO INSTALARLO (una sola vez):
--   Supabase Dashboard → SQL Editor → pegar y correr este archivo.
-- ═══════════════════════════════════════════════════════════════

create table if not exists public.recorridos_programados (
  id          uuid primary key default gen_random_uuid(),
  ruta_id     text not null,
  nombre_ruta text,
  vehiculo_id text,
  placa       text,
  perfil_id   text not null,
  conductor   text,
  fecha       timestamptz not null default now(),
  estado      text not null default 'programada',
  creado_en   timestamptz not null default now(),

  -- Requerido por el upsert de la app (onConflict: 'ruta_id,perfil_id'):
  -- guardar la misma ruta dos veces actualiza el registro en vez de duplicarlo.
  unique (ruta_id, perfil_id)
);

create index if not exists idx_recorridos_programados_perfil
  on public.recorridos_programados (perfil_id);

-- Nota: se deja sin Row Level Security, igual que recorridos_app
-- (el resto de la app ya asume acceso vía la anon key sin políticas
-- adicionales). Si activas RLS en el futuro, replica ahí las mismas
-- políticas que uses en recorridos_app.
