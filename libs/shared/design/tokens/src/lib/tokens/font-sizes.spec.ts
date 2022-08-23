/** @format */

import fontSizes from './font-sizes';

describe('font-sizes', () => {
  it('should be a list of integers only', () => {
    fontSizes.forEach((fontSize) => {
      expect(Number.isInteger(fontSize)).toBeTruthy();
    });
  });

  it('should be represented by an increasing range of numbers', () => {
    const ascendingOrder: boolean = fontSizes.reduce((acc, fontSize, index) => {
      let isGreaterThanLast = true;
      if (index > 0) isGreaterThanLast = fontSize > fontSizes[index - 1];
      return acc && isGreaterThanLast;
    }, true);

    expect(ascendingOrder).toBeTruthy();
  });
});
