/** @format */

import colorPalettes from './color-palette';

describe('color-palette', () => {
  it('should have basic prefixes for all colors (neutral, opacity, primary and secondary)', () => {
    Object.keys(colorPalettes).forEach((colorPalette) => {
      expect(
        colorPalette.match(/^(neutral|opacity|primary|secondary)-/)
      ).toBeTruthy();
    });
  });

  it('should use rgba for opacity or capitol case hexadecimal for solid color values', () => {
    Object.keys(colorPalettes).forEach((color) => {
      const hexValueMatch = colorPalettes[color].match(/^#[A-F0-9]{6}$/);
      const rgbaValueMatch = colorPalettes[color].match(
        /^(rgba\()([0-9]{1,3},\s){3}((0.[0-9])|0|1)\)$/
      );
      const keyIsOpacity = color.match(/^opacity/);
      expect(
        (hexValueMatch && !keyIsOpacity) || (rgbaValueMatch && keyIsOpacity)
      ).toBeTruthy();
    });
  });
});
