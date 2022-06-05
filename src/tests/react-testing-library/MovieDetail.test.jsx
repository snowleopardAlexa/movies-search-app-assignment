import { createRoot, screen } from '@testing-library/react';
import Header from '../../components/Header/Header';

test('renders title', () => {
  createRoot(<Header />);
  const linkElement = screen.getByTestId("link");
  expect(linkElement).toBeInTheDocument();
});