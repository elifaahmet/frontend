/** @format */

import gutters from './gutters';

describe('gutters', () => {
  it('should be a list of integers only (no prescribed units)', () => {
    gutters.forEach((spacer) => expect(typeof spacer).toEqual('number'));
  });

  it('should be represented as a list of increasing numbers', () => {
    const isAscending = gutters.reduce((acc, value, index) => {
      let isGreaterThanPrevious = true;
      if (index > 0) isGreaterThanPrevious = value > gutters[index - 1];
      return acc && isGreaterThanPrevious;
    }, true);

    expect(isAscending).toBeTruthy();
  });
});
