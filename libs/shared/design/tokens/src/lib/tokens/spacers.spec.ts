/** @format */

import spacers from './spacers';

describe('spacers', () => {
  it('should be a list of integers only (no prescribed units)', () => {
    spacers.forEach((spacer) => expect(typeof spacer).toEqual('number'));
  });

  it('should be represented as a list of increasing numbers', () => {
    const isAscending = spacers.reduce((acc, value, index) => {
      let isGreaterThanPrevious = true;
      if (index > 0) isGreaterThanPrevious = value > spacers[index - 1];
      return acc && isGreaterThanPrevious;
    }, true);

    expect(isAscending).toBeTruthy();
  });
});
