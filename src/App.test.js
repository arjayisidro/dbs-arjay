import { render } from '@testing-library/react';
import App from './App';

// just rendering the components as third party library is not allowed
// must use enzyme for shallowing

test('renders desktop view react app', () => {
  render(<App />);
});
