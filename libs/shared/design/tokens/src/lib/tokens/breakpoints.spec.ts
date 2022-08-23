/** @format */

import breakpoints from './breakpoints';

describe('breakpoints', () => {
  const viewports: string[] = ['small', 'medium', 'large', 'x-large'];

  it('should have numeric values only (with out a unit specifier)', () => {
    Object.keys(breakpoints).forEach((viewport) => {
      expect(typeof breakpoints[viewport]).toBe('number');
    });
  });

  it('should support small, medium, large and x-large viewports', () => {
    viewports.forEach((viewport) => {
      expect(breakpoints).toHaveProperty(viewport);
    });
  });

  it('should have 4 supported viewports', () => {
    expect(Object.keys(breakpoints).length).toEqual(viewports.length);
  });

  it('should have viewports along an ascending scale', () => {
    expect(breakpoints['small']).toBeLessThan(breakpoints['medium']);
    expect(breakpoints['medium']).toBeLessThan(breakpoints['large']);
    expect(breakpoints['large']).toBeLessThan(breakpoints['x-large']);
  });
});
