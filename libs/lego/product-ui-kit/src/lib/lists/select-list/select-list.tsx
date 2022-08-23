/**@format */

import React from 'react';
import { SelectListWrapper } from './select-list.styled';

export const SelectList: React.FC = (props) => (
  <SelectListWrapper>{props.children}</SelectListWrapper>
);

export default SelectList;
