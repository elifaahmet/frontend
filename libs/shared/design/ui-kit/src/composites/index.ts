/**@format */

import { default as baseButtonsComposite } from './base/button';
import { default as baseInputComposite } from './base/input';
import { default as baseGridItemsComposite } from './base/grid';
import { default as marketingTypographyComposite } from './marketing/typography';
import { default as productTypographyComposite } from './product/typography';

export const baseComposites = {
  button: baseButtonsComposite,
  input: baseInputComposite,
  gridItemSpan: baseGridItemsComposite,
};

export type {
  ButtonsType as BaseButtonsType,
  ButtonKey as BaseButtonKey,
} from './base/button';
export type {
  InputCompositeType as BaseInputType,
  InputCompositeKey as BaseInputKey,
} from './base/input';
export type {
  GridItemSpanType as BaseGridItemSpanType,
  GridItemSpanKey as BaseGridItemSpanKey,
} from './base/grid';

export const marketingComposites = {
  typography: marketingTypographyComposite,
};

export type {
  TypographyType as MarketingTypographyType,
  TypographyKey as MarketingTypographyKey,
} from './marketing/typography';

export const productComposites = {
  typography: productTypographyComposite,
};

export type {
  TypographyType as ProductTypographyType,
  TypographyKey as ProductTypographyKey,
} from './product/typography';
