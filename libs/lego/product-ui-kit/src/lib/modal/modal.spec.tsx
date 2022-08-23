import { render } from '@testing-library/react';
import { ThemeProvider } from '@emotion/react';
import Modal from './modal';
import theme from '../../theme/product-theme';

describe('Modal', () => {
  it('should render successfully', () => {
    const { baseElement, getByText } = render(<ThemeProvider theme={theme}>
      <Modal show={true}>
        <div>Some random modal content.</div>
      </Modal>
    </ThemeProvider>);

    expect(getByText('Some random modal content.')).toBeInTheDocument();
    expect(baseElement).toBeTruthy();
  });
});
