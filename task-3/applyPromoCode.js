import validatePromoCode from './validatePromoCode';
import claimPromoCode from './claimPromoCode';
import PubSub from './PubSub';

export default function applyPromoCode(code) {
  if (!validatePromoCode(code)) {
    PubSub.publish('app:promo:invalid');
    return Promise.resolve();
  }

  return claimPromoCode(code)
    .then(() => PubSub.publish('app:promo:claimed'))
    .catch(() => PubSub.publish('app:promo:rejected'));
}