/** @format */

function getElementStyles(e: Element): CSSStyleDeclaration {
  return window.getComputedStyle(e);
}

/**
 * Sets up mutation observer and adjust DOM to make space for sticky at the bottom.
 */
export function observeDOMMutationsForStickyFooter() {
  const mutationObserver = new MutationObserver((mutationRecords) => {
    mutationRecords.forEach((mutation) => {
      if (mutation.addedNodes && mutation.addedNodes.length > 0) {
        mutation.addedNodes.forEach((node) => {
          if (`${node['className']}`.match(/tend-sticky-footer/i)) {
            const stickyElementRef = document.getElementsByClassName(
              'tend-sticky-footer'
            )[0];
            const stickyHeight = getElementStyles(stickyElementRef).height;

            const spacer = document.createElement('div');
            spacer.setAttribute(
              'style',
              `display: flex; width: 100%; margin: 0; padding: 0; height: ${stickyHeight};`
            );
            document.body.append(spacer);

            mutationObserver.disconnect();
          }
        });
      }
    });
  });

  mutationObserver.observe(document.body, {
    attributes: false,
    childList: true,
    subtree: false,
  });
}

export function createAndInjectStickyFooter(
  footerHtml: string,
  stickyCSS: string
) {
  const stickyRef = document.getElementsByClassName('tend-sticky-footer');
  const stickyExists = stickyRef.length > 0;
  if (stickyExists) {
    // DX consideration
    stickyRef[0].innerHTML = footerHtml;
    return;
  }

  const stickyFooter = document.createElement('div');
  stickyFooter.setAttribute('class', 'tend-sticky-footer');
  stickyFooter.innerHTML = footerHtml;
  document.body.append(stickyFooter);

  const stickyStyles = document.createElement('style');
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  stickyStyles.innerHTML = stickyCSS;
  document.body.append(stickyStyles);
}
