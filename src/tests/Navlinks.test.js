import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from '../components/Navbar';

describe('Testing Navbar Links', () => {
  test('Testing that all links are present', () => {
    render(
      <Router>
        <Navbar />
      </Router>,
    );

    expect(screen.getAllByText('Home')).toMatchSnapshot();
    expect(screen.getAllByText('Calculator')).toMatchSnapshot();
    expect(screen.getAllByText('Quote')).toMatchSnapshot();
  });

  test('Test navigate to Home Page', () => {
    render(
      <Router>
        <Navbar />
      </Router>,
    );

    fireEvent.click(screen.getByText('Home'));

    expect(screen.getByText('Home')).toMatchInlineSnapshot(`
<a
  aria-current="page"
  class="active"
  href="/"
>
  Home
</a>
`);
  });

  test('Test navigate to Calculator Page', () => {
    render(
      <Router>
        <Navbar />
      </Router>,
    );

    fireEvent.click(screen.getByText('Calculator'));

    expect(screen.getByText('Calculator')).toMatchInlineSnapshot(`
<a
  aria-current="page"
  class="active"
  href="/calculator"
>
  Calculator
</a>
`);
  });

  test('Test navigate to Quote Page', () => {
    render(
      <Router>
        <Navbar />
      </Router>,
    );

    fireEvent.click(screen.getByText('Quote'));

    expect(screen.getByText('Quote')).toMatchInlineSnapshot(`
<a
  aria-current="page"
  class="active"
  href="/quote"
>
  Quote
</a>
`);
  });
});
