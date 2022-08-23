/** @format */

import letterSpacings from './letter-spacings';

describe('letter-spacings', () => {
  it('should be an list of numbers', () => {
    letterSpacings.forEach((letterSpacingValue) =>
      expect(typeof letterSpacingValue === 'number').toBeTruthy()
    );
  });
});
