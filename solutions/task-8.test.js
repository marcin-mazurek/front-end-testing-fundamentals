import sortArray from '../task-8/sortArray';

describe('sortArray', () => {
  it('sorts an array correctly', () => {
    expect(sortArray([0, 808, 6, 3, 55, 102, 2, 34, 1010, 3, 42, 14, 61])).toMatchSnapshot();
    expect(sortArray(['lorem', 'ipsum', 'dolor', 'sit', 'amet'])).toMatchSnapshot();
  });

  it('throws when incorrect data type is passed as argument', () => {
    expect(() => sortArray(null)).toThrowErrorMatchingSnapshot();
  });
});