# SEMINARIO-1
PROYECTO BASADO EN ANGULAR CLI
Proyecto Angular - Ejemplo Inicial

📌 Descripción breve del proyecto en Angular

Angular es un framework de desarrollo web mantenido por Google, diseñado para crear aplicaciones de una sola página (SPA) con una arquitectura robusta y escalable.
Un proyecto en Angular, desde su creación con la CLI (Command Line Interface), incluye de forma predeterminada:

Estructura modular (carpetas organizadas en módulos y componentes).

Lenguaje TypeScript, que permite un tipado fuerte y código más mantenible.

Inyección de dependencias, facilitando la reutilización de servicios.

Herramientas integradas como compilación AoT, lazy loading y testing con Karma/Jasmine.

Soporte para RxJS, que permite programación reactiva y manejo de flujos de datos complejos.

Esto lo convierte en una solución muy completa para proyectos grandes y empresariales.

⚖️ Pros y contras de Angular frente a otros frameworks (React y Vue)
✅ Ventajas (Pros)

Estructura clara y completa: ya incluye todo lo necesario (enrutamiento, manejo de formularios, servicios).

TypeScript integrado: ideal para proyectos de larga duración donde el código debe ser mantenible.

Soporte corporativo: Google y grandes empresas lo usan (Microsoft, Santander, etc.).

Escalabilidad: pensado para proyectos grandes con muchos módulos y equipos de trabajo.

Herramientas avanzadas: Angular CLI, NgRx para manejo de estado, RxJS, testing integrado.

❌ Desventajas (Contras)

Curva de aprendizaje alta: muchos conceptos (módulos, servicios, observables, pipes, etc.).

Verborrea en el código: en comparación con React o Vue, necesita más archivos y configuración.

Más pesado: el tamaño inicial de la aplicación es mayor que con Vue o React.

Menos flexible: sigue un esquema rígido de trabajo (conviene para grandes equipos, no tanto para proyectos pequeños).

🔍 Comparación rápida
Aspecto	Angular	React	Vue
Lenguaje	TypeScript obligatorio	JavaScript/TypeScript opcional	JavaScript/TypeScript opcional
Arquitectura	Completa y rígida	Flexible (solo la vista)	Ligero y flexible
Escalabilidad	Excelente en proyectos grandes	Depende de librerías externas	Mejor para medianos/pequeños
Curva de aprendizaje	Alta	Media	Baja
Comunidad	Muy grande (Google)	Muy grande (Meta/Facebook)	Más pequeña pero en crecimiento
🚀 Ejemplo mínimo: un proyecto Angular creado con ng new ejemplo-angular

Instalar Angular CLI si no lo tienes:

npm install -g @angular/cli


Crear un proyecto nuevo:

ng new ejemplo-angular
cd ejemplo-angular


👉 Esto genera una estructura con:

src/app/app.module.ts → módulo principal.

src/app/app.component.ts → componente raíz.

angular.json → configuración global.

package.json → dependencias del proyecto.

Ejecutar el servidor de desarrollo:

ng serve


La app estará en: http://localhost:4200
.

Modificar el componente raíz (src/app/app.component.html):

<h1>Hola Angular 🚀</h1>
<p>Este es el ejemplo mínimo generado con Angular CLI.</p>


Al refrescar el navegador, se verá ese mensaje.
