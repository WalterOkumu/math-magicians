import { render, screen } from '@testing-library/react';
import HomePage from '../pages/HomePage';
import CalculatorPage from '../pages/CalculatorPage';
import QuotePage from '../pages/QuotePage';

describe('Test React Components', () => {
  test('Test Home Page is rendered', () => {
    render(<HomePage />);

    expect(screen.getAllByText('Welcome to our page!')).toMatchSnapshot();
  });

  test('Test Calculator Page is rendered', () => {
    render(<CalculatorPage />);

    expect(screen.findAllByTitle('Let&#39;s do some math!')).toMatchSnapshot();
  });

  test('Test Quote Page is rendered', () => {
    render(<QuotePage />);

    expect(screen.findAllByTitle('Math Quote')).toMatchSnapshot();
  });
});
