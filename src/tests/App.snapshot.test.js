import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import App from '../App';

describe('Jest snapshot to test components', () => {
  test('Matches DOM snapshot', () => {
    const domTree = renderer
      .create(
        <React.StrictMode>
          <Router>
            <App />
          </Router>
        </React.StrictMode>,
      )
      .toJSON();

    expect(domTree).toMatchSnapshot();
  });
});
