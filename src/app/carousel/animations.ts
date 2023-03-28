import {animate, state, style, transition} from "@angular/animations";

export const animationCarousel = [
  state('outright', style({ transform: `translateX(100%)` })),
  state('outleft', style({ transform: `translateX(-100%)` })),
  transition('void=>inleft', [style({ transform: `translateX(0)` })]),
  transition('void=>outleft', [style({ transform: `translateX(-100%)` })]),

  transition('*=>inright', [
    style({ transform: `translateX(-100%)` }),
    animate('260ms ease-in', style({ transform: `translateX(0)` })),
  ]),
  transition('*=>inleft', [
    style({ transform: `translateX(100%)` }),
    animate('260ms ease-in', style({ transform: `translateX(0)` })),
  ]),
  transition('*=>outleft', [
    animate('260ms ease-in', style({ transform: `translateX(-100%)` })),
  ]),
  transition('*=>outright', [
    animate('260ms ease-in', style({ transform: `translateX(100%)` })),
  ]),
];
