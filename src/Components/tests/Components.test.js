import { screen, render, waitFor } from '@testing-library/react';
import { Route, MemoryRouter } from 'react-router-dom';
import Quote from '../Quote';
import NavBar from '../NavBar';

describe('Tests for Components', () => {
  test('Check the element on the page', async () => {
    render(<Quote />);
    await waitFor(() => {
      expect(screen.getByTestId('main-container')).toMatchSnapshot();
    });
  });

  test('Check the navlink', () => {
    <Route>
      (render(
      <NavBar />
      )
      const linkElement = screen.getByText(/Maths Magician/i);
      expect(linkElement).toMatchSnapshot();)
    </Route>;
  });

  test('Check click event', () => {
    <MemoryRouter>
      render(
      <NavBar />
      )
      const linkElement = screen.getByText(/Home/i); const
      expectedResult = getByText(/Welcome to our page!/i);
      fireEvent.click(linkElement); expect(expectedResult).toBeInTheDocument();
    </MemoryRouter>;
  });
});
