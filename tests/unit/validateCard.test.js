import { validateCardNumber } from '../../src/utils/validateCard.js';

describe('validateCardNumber', () => {
  test('valid card number (Visa)', () => {
    expect(validateCardNumber('4111111111111111')).toBe(true);
  });

  test('invalid card number (Visa)', () => {
    expect(validateCardNumber('4111111111111112')).toBe(false);
  });

  test('valid card number (MasterCard)', () => {
    expect(validateCardNumber('5555555555554444')).toBe(true);
  });

  test('invalid card number (MasterCard)', () => {
    expect(validateCardNumber('5555555555554445')).toBe(false);
  });

  test('valid card number (Amex)', () => {
    expect(validateCardNumber('378282246310005')).toBe(true);
  });

  test('invalid card number (Amex)', () => {
    expect(validateCardNumber('378282246310006')).toBe(false);
  });

  test('valid card number (Mir)', () => {
    expect(validateCardNumber('2200000000000004')).toBe(true);
  });

  test('empty string', () => {
    expect(validateCardNumber('')).toBe(false);
  });

  test('non-digit characters', () => {
    expect(validateCardNumber('123abc')).toBe(false);
  });

  test('spaces and dashes', () => {
    expect(validateCardNumber('4111 1111 1111 1111')).toBe(true);
    expect(validateCardNumber('4111-1111-1111-1111')).toBe(true);
  });
});
