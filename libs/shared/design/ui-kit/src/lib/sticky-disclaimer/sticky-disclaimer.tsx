/** @format **/

import React, { useEffect, ReactNode, ReactElement } from 'react';
import { renderToString } from 'react-dom/server';
import {
  observeDOMMutationsForStickyFooter,
  createAndInjectStickyFooter,
} from './helpers';

export interface StickyDisclaimerProps {
  children?: ReactNode;
}

export const stickyStyles = `
.tend-sticky-footer {
  display: flex;
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 9999;
  width: 100%;
  margin: 0;
  padding: 0;
  box-shadow: 0 4px 20px 0 rgb(0 0 0 / 10%);
}`;

export const StickyDisclaimer: React.FC<StickyDisclaimerProps> = (props) => {
  useEffect(() => {
    const stickyFooterHtmlString = renderToString(
      props.children as ReactElement
    );
    observeDOMMutationsForStickyFooter();
    createAndInjectStickyFooter(stickyFooterHtmlString, stickyStyles);
  }, [props.children]);
  return null;
};

export function injectStickyFooter(stickyFooterHtmlString: string) {
  observeDOMMutationsForStickyFooter();
  createAndInjectStickyFooter(stickyFooterHtmlString, stickyStyles);
}

export default StickyDisclaimer;
