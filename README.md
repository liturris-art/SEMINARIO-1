# SEMINARIO-1
PROYECTO BASADO EN ANGULAR CLI
Proyecto Angular - Ejemplo Inicial

Este repositorio contiene un proyecto base creado con Angular CLI como parte del plan de trabajo.
El objetivo es familiarizarnos con la estructura de Angular, sus ventajas y desventajas frente a otros frameworks como React y Vue.

📌 Descripción breve del proyecto

El proyecto fue generado con:

ng new ejemplo-angular
cd ejemplo-angular
ng serve


Esto crea una aplicación Angular mínima con:

Un componente raíz AppComponent.

Configuración inicial de TypeScript.

Sistema de enrutamiento opcional.

Estructura organizada en módulos y componentes.

La aplicación puede ejecutarse en el navegador en http://localhost:4200/.

⚖Pros y contras de Angular frente a React y Vue
Aspecto	Angular (Google)	React (Meta)	Vue (Evan You & comunidad)
Lenguaje	TypeScript por defecto (tipado fuerte).	JavaScript/TypeScript opcional.	JavaScript/TypeScript opcional.
Estructura	Muy completa: módulos, servicios, inyección de dependencias, CLI robusta.	Flexible, más libre pero requiere librerías externas.	Ligero y sencillo, curva de aprendizaje baja.
Escalabilidad	Excelente para proyectos grandes y corporativos.	Buena, pero depende de la arquitectura que definas.	Mejor en proyectos medianos o pequeños.
Curva de aprendizaje	Alta, requiere aprender muchos conceptos (módulos, RxJS, NgRx).	Media, más rápido de empezar.	Baja, fácil para principiantes.
Rendimiento	Muy bueno, optimizaciones integradas (Ivy, AoT, lazy loading).	Muy bueno, Virtual DOM.	Muy bueno, Virtual DOM y ligereza.
Comunidad	Amplia y corporativa (Google, Microsoft, grandes empresas).	Amplísima y muy activa.	Menor que React/Angular, pero creciente y sólida.
Ejemplo mínimo en Angular

Tras ejecutar ng new ejemplo-angular, Angular genera un proyecto básico.
Por defecto, el AppComponent contiene lo siguiente:

src/app/app.component.html

<h1>Hola Angular </h1>
<p>Este es el ejemplo mínimo generado con Angular CLI.</p>


Al correr:

ng serve


Verás el mensaje en el navegador en la URL http://localhost:4200
.

Conclusión

Angular es un framework robusto y completo, ideal para proyectos de gran escala.
Su curva de aprendizaje es más alta que React y Vue, pero ofrece una arquitectura sólida lista para crecer.
