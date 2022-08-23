/** @format */

import durations from './durations';

describe('breakpoints', () => {
  const durationKeys: string[] = ['instant', 'fast', 'medium', 'slow'];

  it('should have numeric ms values only', () => {
    Object.keys(durations).forEach((viewport) => {
      expect(typeof durations[viewport]).toBe('number');
    });
  });

  it('should have instant, fast, medium and slow keys', () => {
    durationKeys.forEach((viewport) => {
      expect(durations).toHaveProperty(viewport);
    });
  });
});
