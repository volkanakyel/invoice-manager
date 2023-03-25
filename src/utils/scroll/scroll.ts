import { noScrollClass, noScrollMobileClass } from '@/utils/constants/scroll';

/**
 * @description will disable scroll by adding CSS class.es on <html>
 * @param {Boolean | undefined} onMobile - disable scroll on mobile if true
 */

export const disableScroll = (onMobileOnly?: Boolean): void => {
  const noScrollClasses = [noScrollClass];

  if (onMobileOnly) {
    noScrollClasses.push(noScrollMobileClass);
  }

  (document.body as HTMLElement).classList.add(...noScrollClasses);
};

/**
 * @description will enable scroll by removing CSS class.es on <html>
 */

export const enableScroll = (): void => {
  const noScrollClasses = [noScrollMobileClass, noScrollClass];

  (document.body as HTMLElement).classList.remove(...noScrollClasses);
};

export const scrollWindowVertically = (topScrollValue: number) => {
  window.scrollTo({
    top: topScrollValue,
    behavior: 'smooth',
  });
};

export default {
  disableScroll,
  enableScroll,
  scrollWindowVertically,
};
