import {
    style,
    animate,
    transition
} from '@angular/animations';

const ScaleAnimation = [
    transition(
      ':enter', 
      [
        style({ transform: 'scale(0.3)'}),
        animate('300ms ease-out', 
                style({ transform: 'scale(1)' }))
      ]
    ),
    transition(
      ':leave', 
      [
        style({ transform: 'scale(1)'}),
        animate('200ms ease-in', 
                style({ transform: 'scale(0)' }))
      ]
    )
  ];

export default ScaleAnimation;