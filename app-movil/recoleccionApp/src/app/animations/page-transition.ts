import { AnimationBuilder, createAnimation } from '@ionic/angular/standalone';

// Transición de página personalizada para toda la app: replica el
// deslizamiento clásico de iOS (push/pop) — la página nueva entra desde
// la derecha cubriendo a la anterior, que se desliza parcialmente hacia
// la izquierda con un leve oscurecido (efecto "parallax"), y un poco de
// sombra en el borde de la página que entra. Al volver atrás, se invierte.
// Se aplica vía navAnimation en main.ts, sin depender de mode: 'ios'
// (eso también cambiaría el estilo de íconos/botones en toda la app).
export const pageTransition: AnimationBuilder = (_baseEl, opts) => {
  const DURATION = 380;
  const EASING = 'cubic-bezier(0.32, 0.72, 0, 1)'; // curva real de iOS
  const isBack = opts.direction === 'back';
  const enteringEl = opts.enteringEl;
  const leavingEl = opts.leavingEl;

  const enteringAnimation = createAnimation()
    .addElement(enteringEl)
    .beforeStyles({ 'z-index': '2', 'box-shadow': '0 0 24px rgba(0, 0, 0, 0.18)' })
    .beforeClearStyles(['transform'])
    .fromTo('transform', isBack ? 'translateX(-30%)' : 'translateX(100%)', 'translateX(0)');

  const leavingAnimation = createAnimation()
    .addElement(leavingEl)
    .beforeStyles({ 'z-index': '1' })
    .beforeClearStyles(['transform'])
    .fromTo('transform', 'translateX(0)', isBack ? 'translateX(100%)' : 'translateX(-30%)')
    .fromTo('opacity', 1, isBack ? 1 : 0.85);

  return createAnimation()
    .addElement(_baseEl)
    .easing(EASING)
    .duration(DURATION)
    .addAnimation([enteringAnimation, leavingAnimation]);
};
