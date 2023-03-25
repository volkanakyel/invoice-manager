// eslint-disable-next-line no-shadow
export enum SCROLL_DIRECTIONS {
  DOWN = 'down',
  UP = 'up',
  INITIAL = 'initial',
}

export const scrollDownClass: string = `scrolled--${SCROLL_DIRECTIONS.DOWN}`;
export const scrollUpClass: string = `scrolled--${SCROLL_DIRECTIONS.UP}`;

export const noScrollClass: string = 'no-scroll';
export const noScrollMobileClass: string = `${noScrollClass}_only-mobile`;
