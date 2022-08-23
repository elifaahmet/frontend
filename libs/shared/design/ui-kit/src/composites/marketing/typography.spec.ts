/** @format */

import typography from './typography';

// TODO: Determine why .spec files are not jest aware despite eslintrc / tsconfig inclusion of library
describe('typography', () => {
  it('should not need any tests because TypeScript is dope', () => {
    expect(typography).toBeTruthy();
    expect('word').toBeTruthy();
  });
});
