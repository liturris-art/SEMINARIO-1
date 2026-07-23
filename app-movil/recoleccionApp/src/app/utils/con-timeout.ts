// Envuelve una promesa con un límite de tiempo — si no resuelve a tiempo,
// se resuelve con `fallback` en vez de dejar quien la llama esperando para
// siempre. Pensado para llamadas a supabase-js: su lock interno de auth
// puede quedar esperándose a sí mismo en ciertos WebView, y sin esto una
// sola llamada colgada deja la pantalla "cargando" indefinidamente.
export function conTimeout<T>(promesa: Promise<T>, ms: number, fallback: T): Promise<T> {
  return new Promise<T>((resolve) => {
    const timer = setTimeout(() => resolve(fallback), ms);
    promesa
      .then(v => { clearTimeout(timer); resolve(v); })
      .catch(() => { clearTimeout(timer); resolve(fallback); });
  });
}
