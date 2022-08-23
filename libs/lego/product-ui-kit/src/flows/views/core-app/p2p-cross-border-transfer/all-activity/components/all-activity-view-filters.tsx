/**@format */
import React, { ChangeEvent, useState } from 'react';

import {
  Calendar,
  L1,
  SetDateRangeType,
  Spacer,
} from '@tend/lego/product-ui-kit';
import { ButtonProduct, Checkbox } from '@tend/shared/design/ui-kit';

import { FilterSubForm } from './all-activity-view.styled';

export interface AllActivityViewFiltersProps {
  onFiltersApplyClick: (filters: any) => void;
  setDates: SetDateRangeType;
  setShowFilter: React.Dispatch<React.SetStateAction<boolean>>;
}

export const AllActivityViewFilters: React.FC<AllActivityViewFiltersProps> = (
  props
) => {
  const [filters, setFilters] = useState({
    allTransaction: false,
    pastThreeMonths: false,
    currentMonth: false,
    currentYear: false,
    previousYear: false,
  });
  const { onFiltersApplyClick, setDates, setShowFilter } = props;
  const currentDate = new Date();

  const setFilter = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setFilters((prevState) => ({
      ...prevState,
      [name]: checked,
    }));
  };

  /** TODO: do something with filters once we know more about PWA */

  return (
    <FilterSubForm>
      <Spacer top={20} bottom={20} />
      <Spacer top={20} left={16} right={16}>
        <L1>FILTER BY DATE</L1>
      </Spacer>
      <Spacer top={20} bottom={20} left={16} right={16}>
        <Checkbox
          label="All Transaction"
          labelColor="neutral-white"
          name={'allTransaction'}
          onChange={setFilter}
        />
      </Spacer>
      <Spacer top={20} bottom={20} left={16} right={16}>
        <Checkbox
          label="Past Three Months"
          labelColor="neutral-white"
          name={'pastThreeMonths'}
          onChange={setFilter}
        />
      </Spacer>
      <Spacer top={20} bottom={20} left={16} right={16}>
        <Checkbox
          label={currentDate.toLocaleString('default', { month: 'long' })}
          labelColor="neutral-white"
          name={'currentMonth'}
          onChange={setFilter}
        />
      </Spacer>
      <Spacer top={20} bottom={20} left={16} right={16}>
        <Checkbox
          label={`${currentDate.getFullYear()}`}
          labelColor="neutral-white"
          name={'currentYear'}
          onChange={setFilter}
        />
      </Spacer>
      <Spacer top={20} bottom={20} left={16} right={16}>
        <Checkbox
          label={`${currentDate.getFullYear() - 1}`}
          labelColor="neutral-white"
          name={'previousYear'}
          onChange={setFilter}
        />
      </Spacer>
      <Spacer top={20} left={16} right={16}>
        <Calendar setDates={setDates} />
      </Spacer>
      <Spacer top={20} left={16} right={16}>
        <ButtonProduct
          onClick={(e) => {
            setShowFilter(false);
            onFiltersApplyClick(filters);
          }}
        >
          Apply Filters
        </ButtonProduct>
      </Spacer>
    </FilterSubForm>
  );
};

export default AllActivityViewFilters;
