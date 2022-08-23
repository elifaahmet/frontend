/** @format */

import lineHeights from './line-heights';

describe('line-heights', () => {
  it('should be a list of numbers', () => {
    lineHeights.forEach((lineHeight) =>
      expect(typeof lineHeight === 'number').toBeTruthy()
    );
  });

  it('should be represented by an increasing range of numbers', () => {
    const ascendingOrder: boolean = lineHeights.reduce((acc, value, index) => {
      let isGreaterThanPrevious = true;
      if (index > 0) isGreaterThanPrevious = value > lineHeights[index - 1];
      return acc && isGreaterThanPrevious;
    }, true);

    expect(ascendingOrder).toBeTruthy();
  });
});
