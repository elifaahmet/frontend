/** @format */

import {
  observeDOMMutationsForStickyFooter,
  createAndInjectStickyFooter,
} from './helpers';
import { stickyStyles } from './sticky-disclaimer';

describe('sticky-disclaimer > helpers', () => {
  const bodyTemplate = '<div id="__next"></div>';

  describe('createAndInjectStickyFooter()', () => {
    beforeEach(() => {
      document.body.innerHTML = `${bodyTemplate}`;
      createAndInjectStickyFooter('<footer></footer>', stickyStyles);
    });

    it('should inject a div with class "tend-sticky-footer"', () => {
      const stickyFooter = document.body.getElementsByClassName(
        'tend-sticky-footer'
      )[0];
      expect(stickyFooter).toBeTruthy();
      expect(stickyFooter.className).toEqual('tend-sticky-footer');
    });

    it('should have "sticky" styles and fill enough space to only wrap the contents horizontally', () => {
      const stickyFooter = document.body.getElementsByClassName(
        'tend-sticky-footer'
      )[0];
      const computedStyles = window.getComputedStyle(stickyFooter);
      expect(stickyFooter.className).toEqual('tend-sticky-footer');
      expect(computedStyles.display).toEqual('flex');
      expect(computedStyles.position).toEqual('fixed');
      expect(computedStyles.bottom).toEqual('0px');
      expect(computedStyles.left).toEqual('0px');
      expect(computedStyles.width).toEqual('100%');
      expect(computedStyles.margin).toEqual('0px');
      expect(computedStyles.padding).toEqual('0px');
      expect(computedStyles.zIndex).toEqual('9999');
    });

    it('should contain the contents of the footer html', () => {
      const stickyFooter = document.body.getElementsByClassName(
        'tend-sticky-footer'
      )[0];
      expect(stickyFooter.innerHTML).toEqual('<footer></footer>');
    });
  });

  describe('observeDOMMutationsForStickyFooter()', () => {
    it('should watch for mutations and inject a spacer div', async () => {
      document.body.innerHTML = `${bodyTemplate}`;
      observeDOMMutationsForStickyFooter();
      await createAndInjectStickyFooter('<footer></footer>', stickyStyles);
      const bodyDivNodes = document.body.getElementsByTagName('div');
      expect(bodyDivNodes.length).toEqual(3);
      const set = new Set();
      Array.from(bodyDivNodes).forEach((node) => {
        if (node.className === 'tend-sticky-footer')
          set.add('tend-sticky-footer');
        if (node.id === '__next') set.add('__next');
        if (!node.id && !node.className) set.add('');
      });
      expect(set.has('__next'));
      expect(set.has('tend-sticky-footer'));
      expect(set.has(''));
    });
  });
});
