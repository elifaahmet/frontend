/**@format */
import { ReactNode } from 'react';

import { ColorName } from '@tend/shared/design/tokens';

export interface TypographyProps {
  color?: ColorName;
  children: ReactNode;
  className?: string;
  useOpacity?: boolean;
  bold?: boolean;
}
