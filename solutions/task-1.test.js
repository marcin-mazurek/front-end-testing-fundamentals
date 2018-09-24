import validatePromoCode from '../task-1/validatePromoCode';

describe('validatePromoCode', () => {
  it('returns true if valid code is given', () => {
    expect(validatePromoCode('VEGAS-1234-ABC')).toBe(true);
    expect(validatePromoCode('VEGAS-5678-DEF')).toBe(true);
    expect(validatePromoCode('VEGAS-9090-GHI')).toBe(true);
  });

  it('returns false if invalid code is given', () => {
    expect(validatePromoCode('VEGAS-12345-ABC')).toBe(false);
    expect(validatePromoCode('VEGAS-5678-DEFG')).toBe(false);
    expect(validatePromoCode('VEGAS9090GHI')).toBe(false);
  });

  it('throws a TypeError if incorrect argument type is passed', () => {
    expect(() => validatePromoCode()).toThrowError(TypeError);
    expect(() => validatePromoCode(false)).toThrowError(TypeError);
    expect(() => validatePromoCode(123)).toThrowError(TypeError);
    expect(() => validatePromoCode({})).toThrowError(TypeError);
  });
});