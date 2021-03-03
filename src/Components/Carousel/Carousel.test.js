import { render } from '@testing-library/react';
import Carousel from './Carousel';
import { homepageContents } from '../../constants';

// just rendering the components as third party library is not allowed
// must use enzyme for shallowing

test('renders Carousel', () => {
  render(<Carousel carouselContents={homepageContents} />);
});
