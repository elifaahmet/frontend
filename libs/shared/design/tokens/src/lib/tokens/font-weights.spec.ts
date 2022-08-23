/** @format */

import fontWeights from './font-weights';

describe('font-sizes', () => {
  it('should support regular and bold', () => {
    const expectedFontWeightKeys: Set<string> = new Set(['regular', 'bold']);
    const fontWeightsKeySet: Set<string> = new Set(Object.keys(fontWeights));

    expect(fontWeightsKeySet.size).toEqual(expectedFontWeightKeys.size);
    fontWeightsKeySet.forEach((fontWeightKey) =>
      expect(expectedFontWeightKeys.has(fontWeightKey))
    );
  });

  it('should be represented by integers', () => {
    Object.keys(fontWeights).forEach((key) =>
      expect(Number.isInteger(fontWeights[key])).toBeTruthy()
    );
  });
});
