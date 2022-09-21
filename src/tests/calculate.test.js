import calculate from '../logic/calculate';

describe('testing calculate function', () => {
  test('AC button returns 0', () => {
    const testObj = {
      total: 0,
      next: null,
      operation: null,
    };

    const button = 'AC';

    expect(calculate(testObj, button)).toStrictEqual(testObj);
  });

  test('Zero and zero as input returns {}', () => {
    const testObj = {
      total: '0',
      next: '0',
      operation: null,
    };

    const button = '0';

    expect(calculate(testObj, button)).toStrictEqual({});
  });

  test('Test +/- button', () => {
    const testObj = {
      total: 0,
      next: 100,
      operation: null,
    };

    const button = '+/-';

    expect(calculate(testObj, button)).toStrictEqual({ total: 0, next: '-100', operation: null });
  });

  test('Check addition calculation', () => {
    const testObj = {
      total: 80,
      next: 50,
      operation: '+',
    };

    const button = '+';

    expect(calculate(testObj, button)).toStrictEqual({ total: '130', next: null, operation: '+' });
  });

  test('Check subtraction calculation', () => {
    const testObj = {
      total: 80,
      next: 50,
      operation: '-',
    };

    const button = '-';

    expect(calculate(testObj, button)).toStrictEqual({ total: '30', next: null, operation: '-' });
  });

  test('Check multiplication calculation', () => {
    const testObj = {
      total: 80,
      next: 50,
      operation: 'x',
    };

    const button = 'x';

    expect(calculate(testObj, button)).toStrictEqual({ total: '4000', next: null, operation: 'x' });
  });

  test('Check division calculation', () => {
    const testObj = {
      total: 80,
      next: 50,
      operation: '÷',
    };

    const button = '÷';

    expect(calculate(testObj, button)).toStrictEqual({ total: '1.6', next: null, operation: '÷' });
  });

  test('Check decimal addition calculation', () => {
    const testObj = {
      total: 25.7,
      next: 42.8,
      operation: '+',
    };

    const button = '+';

    expect(calculate(testObj, button)).toStrictEqual({ total: '68.5', next: null, operation: '+' });
  });
});
