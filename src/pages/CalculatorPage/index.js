import React from 'react';
import Calculator from '../../components/Calculator';
import './CalculatorPage.styles.scss';

const CalculatorPage = () => (
  <div className="calculator-page-container">
    <div className="text">
      <h4>
        Let&#39;s do some math!
      </h4>
    </div>
    <Calculator className="calculator" />
  </div>
);

export default CalculatorPage;
