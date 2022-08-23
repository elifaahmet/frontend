import { pick } from './object-helpers';

describe('UI Kit > utils > object-helpers', () => {
  describe('pick()', () => {
    it('should work for existing properties', () => {
      const obj = { a: 'a', b: 'b', c: 'c' };
      const result = pick(obj, ['a', 'b']);

      expect(result).toEqual({ a: 'a', b: 'b' });
    })
  });
});
