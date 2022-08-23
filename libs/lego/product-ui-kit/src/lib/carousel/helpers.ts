/**@format */

import { CarouselInnerContainerProps } from './carousel';

export function getTranslateXValue(props: CarouselInnerContainerProps) {
  const translateX = -(
    props.activeItemIndex * 100 -
    (props.isUserInteracting ? props.displacement : 0)
  );
  const marginBoundaryPositive = 3;
  const marginBoundaryNegative = -(
    (props.numChildren - 1) * 100 +
    marginBoundaryPositive
  );

  if (translateX > marginBoundaryPositive) return marginBoundaryPositive;
  if (translateX < marginBoundaryNegative) return marginBoundaryNegative;
  return translateX;
}
