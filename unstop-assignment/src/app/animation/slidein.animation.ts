import { animate, state, style, transition, trigger, sequence } from '@angular/animations';

// useAnimation(slideAnimation)
export const slideAnimationTrigger = trigger('slideAnimation', [
  state('open', style({ height: '*', overflow: 'visible' })),
  state('close', style({ height: '0', overflow: 'hidden' })),
  transition('close=>open', [animate('200ms')]),
  transition('open=>close', [animate('200ms')]),
]);
// export

export const slideDownAnimationTrigger = trigger('slideDown', [
  transition('void => *', [
    style({
      height: '*',
      opacity: '0',
      transform: 'translateY(-100px)',
      'box-shadow': 'none',
    }),
    sequence([
      animate(
        '.22s ease',
        style({
          height: '*',
          opacity: '.2',
          transform: 'translateY(10px)',
          'box-shadow': 'none',
        })
      ),
      animate('.22s ease', style({ height: '*', opacity: 1, transform: 'translateX(0)' })),
    ]),
  ]),
]);

