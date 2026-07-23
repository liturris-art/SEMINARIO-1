-- ═══════════════════════════════════════════════════════════════
-- Regla de negocio: caducidad de 24h para recorridos activos
--
-- El cliente (src/app/pages/home-conductor/home-conductor.page.ts)
-- ya suspende un recorrido que supera 24h, pero solo si el
-- conductor vuelve a abrir la app y esa lógica alcanza a correr.
-- Si nunca vuelve, el recorrido queda "activo" en Supabase para
-- siempre (recorrido fantasma). Este script hace lo mismo del lado
-- del servidor, sin depender del cliente.
--
-- CÓMO INSTALARLO (una sola vez):
--   1. Supabase Dashboard → Database → Extensions → activar "pg_cron".
--   2. Supabase Dashboard → SQL Editor → pegar y correr este archivo completo.
--
-- VERIFICAR QUE QUEDÓ PROGRAMADO:
--   select * from cron.job;
--
-- DESINSTALAR (si hace falta):
--   select cron.unschedule('suspender-recorridos-vencidos');
--   drop function public.suspender_recorridos_vencidos();
-- ═══════════════════════════════════════════════════════════════

create or replace function public.suspender_recorridos_vencidos()
returns void
language sql
security definer
set search_path = public
as $$
  update public.recorridos_app
  set estado = 'suspendido',
      fin_en = now()
  where estado = 'activo'
    and inicio_en < now() - interval '24 hours';
$$;

-- Corre cada 15 minutos. pg_cron ejecuta como el rol que programó el
-- job (normalmente postgres), así que no lo bloquea Row Level Security
-- aunque las tablas tengan RLS activado.
select cron.schedule(
  'suspender-recorridos-vencidos',
  '*/15 * * * *',
  $$ select public.suspender_recorridos_vencidos(); $$
);
