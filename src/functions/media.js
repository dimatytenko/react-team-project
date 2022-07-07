import { breakPoints } from '../libs/constants';

export function mediaPhone(content) {
  return `@media screen and (min-width: ${breakPoints.PHONE}) {
    ${content}
  }`;
}

export function mediaTablet(content) {
  return `@media screen and (min-width: ${breakPoints.TABLET}) {
    ${content}
  }`;
}

export function mediaDesktop(content) {
  return `@media screen and (min-width: ${breakPoints.DESKTOP}) {
    ${content}
  }`;
}
