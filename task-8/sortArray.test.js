import sortArray from './sortArray';

describe('sortArray', () => {
  it('sorts an array correctly', () => {
    expect(sortArray([0, 808, 6, 3, 55, 102, 2, 34, 1010, 3, 42, 14, 61]))
      .toEqual([0, 2, 3, 3, 6, 14, 34, 42, 55, 61, 102, 808, 1010]);

    expect(sortArray(['lorem', 'ipsum', 'dolor', 'sit', 'amet']))
      .toEqual(["amet", "dolor", "ipsum", "lorem", "sit"]);
  });

  it('throws when incorrect data type is passed as argument', () => {
    expect(() => sortArray(null)).toThrowError(/Invalid argument - expected a function/);
  });
});