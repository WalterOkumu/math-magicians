import React from 'react';
import './Calculator.styles.scss';

class Calculator extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <table className="calculator-container">
        <tbody>
          <tr className="top-area">
            <td className="top-area-data" colSpan={4}>0</td>
          </tr>
          <tr>
            <td className="table-button">AC</td>
            <td className="table-button">+/-</td>
            <td className="table-button">%</td>
            <td className="symbol">&#247;</td>
          </tr>
          <tr>
            <td className="table-button">7</td>
            <td className="table-button">8</td>
            <td className="table-button">9</td>
            <td className="symbol">&#215;</td>
          </tr>
          <tr>
            <td className="table-button">4</td>
            <td className="table-button">5</td>
            <td className="table-button">6</td>
            <td className="symbol">-</td>
          </tr>
          <tr>
            <td className="table-button">1</td>
            <td className="table-button">2</td>
            <td className="table-button">3</td>
            <td className="symbol">+</td>
          </tr>
          <tr>
            <td className="table-button" colSpan={2}>0</td>
            <td className="table-button">.</td>
            <td className="symbol">=</td>
          </tr>
        </tbody>
      </table>
    );
  }
}

export default Calculator;
