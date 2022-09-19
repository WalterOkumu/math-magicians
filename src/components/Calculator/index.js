import React, { useState } from 'react';
import calculate from '../../logic/calculate';
import './Calculator.styles.scss';

const Calculator = () => {
  const [state, setState] = useState({
    total: 0,
    operation: null,
    next: null,
  });

  const onClickHandler = (event) => {
    const result = calculate(state, event.target.innerHTML);
    setState(result);
  };

  const { total, operation, next } = state;

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
            <button type="button" onClick={(event) => onClickHandler(event)}>
              AC
            </button>
          </td>
          <td className="table-button">
            <button type="button" onClick={(event) => onClickHandler(event)}>
              +/-
            </button>
          </td>
          <td className="table-button">
            <button type="button" onClick={(event) => onClickHandler(event)}>
              %
            </button>
          </td>
          <td className="symbol">
            <button type="button" onClick={(event) => onClickHandler(event)}>
              ÷
            </button>
          </td>
        </tr>
        <tr>
          <td className="table-button">
            <button type="button" onClick={(event) => onClickHandler(event)}>
              7
            </button>
          </td>
          <td className="table-button">
            <button type="button" onClick={(event) => onClickHandler(event)}>
              8
            </button>
          </td>
          <td className="table-button">
            <button type="button" onClick={(event) => onClickHandler(event)}>
              9
            </button>
          </td>
          <td className="symbol">
            <button type="button" onClick={(event) => onClickHandler(event)}>
              x
            </button>
          </td>
        </tr>
        <tr>
          <td className="table-button">
            <button type="button" onClick={(event) => onClickHandler(event)}>
              4
            </button>
          </td>
          <td className="table-button">
            <button type="button" onClick={(event) => onClickHandler(event)}>
              5
            </button>
          </td>
          <td className="table-button">
            <button type="button" onClick={(event) => onClickHandler(event)}>
              6
            </button>
          </td>
          <td className="symbol">
            <button type="button" onClick={(event) => onClickHandler(event)}>
              -
            </button>
          </td>
        </tr>
        <tr>
          <td className="table-button">
            <button type="button" onClick={(event) => onClickHandler(event)}>
              1
            </button>
          </td>
          <td className="table-button">
            <button type="button" onClick={(event) => onClickHandler(event)}>
              2
            </button>
          </td>
          <td className="table-button">
            <button type="button" onClick={(event) => onClickHandler(event)}>
              3
            </button>
          </td>
          <td className="symbol">
            <button type="button" onClick={(event) => onClickHandler(event)}>
              +
            </button>
          </td>
        </tr>
        <tr>
          <td className="table-button" colSpan={2}>
            <button type="button" onClick={(event) => onClickHandler(event)}>
              0
            </button>
          </td>
          <td className="table-button">
            <button type="button" onClick={(event) => onClickHandler(event)}>
              .
            </button>
          </td>
          <td className="symbol">
            <button type="button" onClick={(event) => onClickHandler(event)}>
              =
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default Calculator;
