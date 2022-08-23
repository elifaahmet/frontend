import '@emotion/react';
import { UIKitTheme } from '@tend/shared/design/ui-kit';

declare module '@emotion/react' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface Theme extends UIKitTheme {
  }
}
