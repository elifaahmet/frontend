/** @format */

import fontFamilies from './font-families';

describe('font-families', () => {
  const fontFamilyCategories = ['body', 'headline', 'label'];

  it('should support all major categories of families', () => {
    fontFamilyCategories.forEach((category) =>
      expect(fontFamilies[category]).toBeTruthy()
    );
  });

  it('should store value as primitives (string)', () => {
    fontFamilyCategories.forEach((category) =>
      expect(typeof fontFamilies[category]).toEqual('string')
    );
  });
});
