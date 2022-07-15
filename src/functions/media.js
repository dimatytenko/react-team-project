import { breakPoints } from '../libs/constants';

export function mediaPhone(content) {
  return `@media screen and (min-width: ${breakPoints.PHONE}px) {
    ${content}
  }`;
}

export function mediaTablet(content) {
  return `@media screen and (min-width: ${breakPoints.TABLET}px) {
    ${content}
  }`;
}

export function mediaDesktop(content) {
  return `@media screen and (min-width: ${breakPoints.DESKTOP}px) {
    ${content}
  }`;
}

export function mediaMaxPhone(content) {
  return `@media screen and (max-width: ${breakPoints.TABLET}px) {
    ${content}
  }`;
}
