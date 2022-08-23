/** @format */

import rules from './rules';

describe('rules', () => {
  it('should be a list of integers only (no units)', () => {
    rules.forEach((rule) => expect(typeof rule).toEqual('number'));
  });

  it('should be an increasing range', () => {
    const isAscending = rules.reduce((acc, value, index) => {
      let isGreaterThanPrevious = true;
      if (index > 0) isGreaterThanPrevious = value > rules[index - 1];
      return acc && isGreaterThanPrevious;
    }, true);

    expect(isAscending).toBeTruthy();
  });
});
