import React from 'react';
import './QuotePage.styles.scss';
import quotes from '../../data/quotes.json';

const QuotePage = () => {
  const getRandomIndex = () => {
    const min = 0;
    const max = 4;

    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  const quoteObj = quotes[getRandomIndex()];

  return (
    <div className="container">
      <h2 className="title">Math Quote</h2>
      <p>
        {quoteObj.quote}
      </p>
      <span>
        -
        {quoteObj.author}
      </span>
    </div>
  );
};

export default QuotePage;
