import { render } from '@testing-library/react';
import Card from './Card';
import { homepageContents } from '../../constants';

// just rendering the components as third party library is not allowed
// must use enzyme for shallowing

test('renders Carousel', () => {
  render(<Card card={homepageContents[0].cards[0].orange} cardType="orange" />);
});
