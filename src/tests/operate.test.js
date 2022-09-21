import operate from '../logic/operate';

describe('testing operate function', () => {
  const numberOne = 100;
  const numberTwo = 200;
  let operation;

  test('Check addition calculation', () => {
    operation = '+';

    expect(operate(numberOne, numberTwo, operation)).toStrictEqual('300');
  });

  test('Check subtraction calculation', () => {
    operation = '-';

    expect(operate(numberOne, numberTwo, operation)).toStrictEqual('-100');
  });

  test('Check multiplication calculation', () => {
    operation = 'x';

    expect(operate(numberOne, numberTwo, operation)).toStrictEqual('20000');
  });

  test('Check division calculation', () => {
    operation = '÷';

    expect(operate(numberOne, numberTwo, operation)).toStrictEqual('0.5');
  });
});
