/**@format */
import { ChangeEvent } from 'react';

export interface SearchProps {
  id: string;
  searchResults: string[];
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  label?: string;
  subtext?: string;
  placeholder?: string;
}

export interface SearchState {
  resultsTopYCoordinate: number;
  searchText: string;
}
