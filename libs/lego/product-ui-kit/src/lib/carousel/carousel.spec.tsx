/**@format */

import { render } from '@testing-library/react';
import theme from '../../theme/product-theme';
import { ThemeProvider } from '@emotion/react';
import Carousel from './carousel';
import { CarouselItem } from './carousel.styled';

describe('Carousel', () => {
  it('should render successfully', () => {
    const { baseElement, getByText, getByRole } = render(
      <ThemeProvider theme={theme}>
        <Carousel offset={0}>
          <CarouselItem>
            <h1>Slide 1</h1>
          </CarouselItem>
          <CarouselItem>
            <h2>Slide 2</h2>
          </CarouselItem>
          <CarouselItem>
            <h3>Slide 3</h3>
          </CarouselItem>
        </Carousel>
      </ThemeProvider>
    );

    expect(getByText('Slide 1')).toBeInTheDocument();
    expect(getByRole('heading', { name: 'Slide 1' })).toBeInTheDocument();
    expect(getByRole('heading', { name: 'Slide 2' })).toBeInTheDocument();
    expect(getByRole('heading', { name: 'Slide 3' })).toBeInTheDocument();
    expect(baseElement).toBeTruthy();
  });
});
