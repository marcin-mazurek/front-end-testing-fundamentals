import nock from 'nock';

import applyPromoCode from './applyPromoCode';
import validatePromoCode from './validatePromoCode';
import claimPromoCode from './claimPromoCode';
import PubSub from './PubSub';

jest.mock('./validatePromoCode');
jest.mock('./claimPromoCode');
jest.mock('./PubSub');

describe('applyPromoCode', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('publishes app:promo:claimed event to PubSub if the promo code has been successfully claimed', () => {

  });

  it('publishes app:promo:rejected event to PubSub if the promo code has been rejected', () => {

  });

  it('publishes app:promo:invalid event to PubSub if the promo code format is invalid', () => {

  });
});