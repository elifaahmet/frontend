import { ChangeEvent } from 'react';

import {
  ListItemDataPaymentProps,
  ListItemDataUserProps,
} from '@tend/lego/product-ui-kit';

export interface SearchBillersProps {
  previousBillers?: Array<ListItemDataUserProps | ListItemDataPaymentProps>;
  pendingBillers?: Array<ListItemDataUserProps | ListItemDataPaymentProps>;
  searchResults: string[];
  onSearchChange: (e: ChangeEvent<HTMLInputElement>) => void;
}
