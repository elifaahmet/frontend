/** @format */

import { UIKitTheme } from '../index';

export enum UIKitContext {
  marketing,
  product,
  productIOS,
  productAndroid,
}

export type ConversionUnit = 'em' | 'rem' | 'px';

export function calculateWithUnit(
  rawValue: number,
  unit: ConversionUnit,
  theme?: UIKitTheme
) {
  if (theme?.kitContext === UIKitContext.marketing) {
    switch (unit) {
      case 'em':
        return `${rawValue / 16}em`;
      case 'rem':
        return `${rawValue / 16}rem`;
      case 'px':
      default:
        return `${rawValue}px`;
    }
  }

  return `${rawValue / 16}rem`;
}

/**@tech-debt: replace kitContext with theme and refactor usages */

export function appendValuesWithUnits(
  cssObject,
  styleKeys: string[],
  kitContext: UIKitContext = 0
) {
  const clone = JSON.parse(JSON.stringify(cssObject));

  styleKeys.forEach((key) => {
    if (
      Object.prototype.hasOwnProperty.call(clone, key) &&
      typeof clone[key] === 'number'
    ) {
      clone[key] = calculateWithUnit(clone[key], 'rem');
    }
  });

  return clone;
}

export function interpolateStyles(styles): string {
  const keys = Object.keys(styles);
  return keys.reduce((acc, key) => {
    const hyphenCaseKey = key.replace(
      /[A-Z]+/g,
      (subString) => `-${subString.toLowerCase()}`
    );
    acc += `${hyphenCaseKey}: ${styles[key]};\n`;
    return acc;
  }, '');
}
