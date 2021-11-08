import { render, screen } from '@testing-library/react';
import { sampleUser } from "../../utils";
import User from './User';


test('renders learn react link', () => {
  render(<User user={sampleUser} />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
