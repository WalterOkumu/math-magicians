import React from 'react';
import Calculator from './components/Calculator';
import './App.scss';

class App extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div>
        <Calculator />
      </div>
    );
  }
}

export default App;
