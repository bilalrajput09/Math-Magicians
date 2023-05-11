import calculate from './calculate';

describe('Should calculate correctly', () => {
  test('Should return 7', () => {
    const dummyData = {
      total: '2',
      next: '5',
      operation: '+',
    };

    const expectedOutput = {
      total: '7',
      next: null,
      operation: null,
    };
    expect(calculate(dummyData, '=')).toEqual(expectedOutput);
  });

  test('Should return ', () => {
    const dummyData = {
      total: '6',
      next: '3',
      operation: '-',
    };

    const expectedOutput = {
      total: '3',
      next: null,
      operation: null,
    };
    expect(calculate(dummyData, '=')).toEqual(expectedOutput);
  });

  test('Should return 10', () => {
    const dummyData = {
      total: '2',
      next: '5',
      operation: 'x',
    };

    const expectedOutput = {
      total: '10',
      next: null,
      operation: null,
    };
    expect(calculate(dummyData, '=')).toEqual(expectedOutput);
  });

  test('Should return 7', () => {
    const dummyData = {
      total: '10',
      next: '5',
      operation: '÷',
    };

    const expectedOutput = {
      total: '2',
      next: null,
      operation: null,
    };
    expect(calculate(dummyData, '=')).toEqual(expectedOutput);
  });
});
