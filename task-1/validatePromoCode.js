export default function validatePromoCode(code) {
  if (typeof code !== 'string') {
    throw new TypeError('Invalid argument - expected a string with a promotion code');
  }

  return /^VEGAS-[0-9]{4}-[A-Z]{3}$/.test(code);
}