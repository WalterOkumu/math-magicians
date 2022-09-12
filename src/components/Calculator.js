import React from 'react';
import calculate from '../logic/calculate';
import './Calculator.styles.scss';

class Calculator extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      total: 0,
      operation: null,
      next: null,
    };

    this.onClickHandler = this.onClickHandler.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }

  onClickHandler = (event) => {
    const result = calculate(this.state, event.target.innerHTML);
    this.setState(result);
  }

  handleKeyDown = (event) => {
    // check keys if you want
    if (event.keyCode === 13) {
      this.focus();
    }
  }

  render() {
    const { total, operation, next } = this.state;
    return (
      <table className="calculator-container">
        <tbody>
          <tr className="top-area">
            <td className="top-area-data" colSpan={4}>
              {total}
              {operation}
              {next}
            </td>
          </tr>
          <tr>
            <td className="table-button">
              <button type="button" onClick={this.onClickHandler}>AC</button>
            </td>
            <td className="table-button">
              <button type="button" onClick={this.onClickHandler}>+/-</button>
            </td>
            <td className="table-button">
              <button type="button" onClick={this.onClickHandler}>
                %
              </button>
            </td>
            <td className="symbol">
              <button type="button" onClick={this.onClickHandler}>
                ÷
              </button>
            </td>
          </tr>
          <tr>
            <td className="table-button">
              <button type="button" onClick={this.onClickHandler}>
                7
              </button>
            </td>
            <td className="table-button">
              <button type="button" onClick={this.onClickHandler}>
                8
              </button>
            </td>
            <td className="table-button">
              <button type="button" onClick={this.onClickHandler}>
                9
              </button>
            </td>
            <td className="symbol">
              <button type="button" onClick={this.onClickHandler}>
                x
              </button>
            </td>
          </tr>
          <tr>
            <td className="table-button">
              <button type="button" onClick={this.onClickHandler}>
                4
              </button>
            </td>
            <td className="table-button">
              <button type="button" onClick={this.onClickHandler}>
                5
              </button>
            </td>
            <td className="table-button">
              <button type="button" onClick={this.onClickHandler}>
                6
              </button>
            </td>
            <td className="symbol">
              <button type="button" onClick={this.onClickHandler}>
                -
              </button>
            </td>
          </tr>
          <tr>
            <td className="table-button">
              <button type="button" onClick={this.onClickHandler}>
                1
              </button>
            </td>
            <td className="table-button">
              <button type="button" onClick={this.onClickHandler}>
                2
              </button>
            </td>
            <td className="table-button">
              <button type="button" onClick={this.onClickHandler}>
                3
              </button>
            </td>
            <td className="symbol">
              <button type="button" onClick={this.onClickHandler}>
                +
              </button>
            </td>
          </tr>
          <tr>
            <td className="table-button" colSpan={2}>
              <button type="button" onClick={this.onClickHandler}>
                0
              </button>
            </td>
            <td className="table-button">
              <button type="button" onClick={this.onClickHandler}>
                .
              </button>
            </td>
            <td className="symbol">
              <button type="button" onClick={this.onClickHandler}>
                =
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    );
  }
}

export default Calculator;
