/** @format **/

import { render } from '@testing-library/react';

import StickyDisclaimer from './sticky-disclaimer';

describe('StickyDisclaimer', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<StickyDisclaimer />);
    expect(baseElement).toBeTruthy();
  });
});
