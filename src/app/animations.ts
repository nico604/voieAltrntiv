import {
  animation, trigger, animateChild, group,
  transition, animate, style, query, state
} from '@angular/animations';

export const slideInAnimation =
  trigger('routeAnimations', [
    transition('Home <=> Crew', [
    style({opacity: 0}),
      animate(2000)
    ]),
  ]);