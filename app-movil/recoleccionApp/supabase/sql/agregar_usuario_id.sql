-- ═══════════════════════════════════════════════════════════════
-- Aislamiento de datos entre conductores
--
-- Hasta ahora, recorridos_app y recorridos_programados solo se
-- filtraban por perfil_id — un valor FIJO y COMPARTIDO por TODA la
-- instalación de la app (el mismo para todos los conductores,
-- asignado por el docente para su propia API, no por usuario).
-- Como resultado, cualquier conductor logueado veía en Historial y
-- Reportes los recorridos de TODOS los demás conductores, no solo
-- los suyos.
--
-- Este script agrega una columna usuario_id (el id de Supabase Auth
-- del conductor) para que el código pueda filtrar "mis propios
-- recorridos" además de perfil_id.
--
-- ⚠️ IMPORTANTE: los recorridos ya guardados ANTES de este cambio
-- quedan con usuario_id = NULL. Como el código nuevo filtra por
-- usuario_id, esos recorridos antiguos dejarán de aparecer en el
-- historial de cualquiera (no se pueden reasignar de forma segura
-- a un conductor específico, porque nunca se guardó esa información).
--
-- CÓMO INSTALARLO: Supabase Dashboard → SQL Editor → correr este archivo.
-- ═══════════════════════════════════════════════════════════════

-- ── recorridos_app ────────────────────────────────────────────
alter table public.recorridos_app
  add column if not exists usuario_id uuid references auth.users(id);

create index if not exists idx_recorridos_app_usuario
  on public.recorridos_app (usuario_id);

-- ── recorridos_programados ──────────────────────────────────────
-- (por si nunca se corrió supabase/sql/crear_recorridos_programados.sql)
create table if not exists public.recorridos_programados (
  id          uuid primary key default gen_random_uuid(),
  ruta_id     text not null,
  nombre_ruta text,
  vehiculo_id text,
  placa       text,
  perfil_id   text not null,
  usuario_id  uuid references auth.users(id),
  conductor   text,
  fecha       timestamptz not null default now(),
  estado      text not null default 'programada',
  creado_en   timestamptz not null default now()
);

alter table public.recorridos_programados
  add column if not exists usuario_id uuid references auth.users(id);

create index if not exists idx_recorridos_programados_usuario
  on public.recorridos_programados (usuario_id);

-- El constraint único anterior era (ruta_id, perfil_id): un conductor
-- pisaba la ruta programada de otro porque perfil_id es compartido.
-- Ahora debe incluir usuario_id.
alter table public.recorridos_programados
  drop constraint if exists recorridos_programados_ruta_id_perfil_id_key;

alter table public.recorridos_programados
  drop constraint if exists recorridos_programados_ruta_id_perfil_id_usuario_id_key;

alter table public.recorridos_programados
  add constraint recorridos_programados_ruta_perfil_usuario_key
  unique (ruta_id, perfil_id, usuario_id);
