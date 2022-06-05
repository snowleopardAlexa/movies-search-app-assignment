import { render, screen } from '@testing-library/react';
import Header from '../../components/Header/Header';


test('allows to navigate to homepage if logo is clicked', () => {
  render(<Header />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

