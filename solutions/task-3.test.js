import nock from 'nock';

import applyPromoCode from '../task-3/applyPromoCode';
import validatePromoCode from '../task-3/validatePromoCode';
import claimPromoCode from '../task-3/claimPromoCode';
import PubSub from '../task-3/PubSub';

jest.mock('../task-3/validatePromoCode');
jest.mock('../task-3/claimPromoCode');
jest.mock('../task-3/PubSub');

const samplePromoCode = 'VEGAS-1234-ABC';

describe('applyPromoCode', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('publishes app:promo:claimed event to PubSub if the promo code has been successfully claimed', () => {
    validatePromoCode.mockReturnValueOnce(true);
    claimPromoCode.mockResolvedValueOnce();

    return applyPromoCode(samplePromoCode)
      .then(() => {
        expect(validatePromoCode).toBeCalledWith(samplePromoCode);
        expect(claimPromoCode).toBeCalledWith(samplePromoCode);
        expect(PubSub.publish).toBeCalledWith('app:promo:claimed');
      });
  });

  it('publishes app:promo:rejected event to PubSub if the promo code has been rejected', () => {
    validatePromoCode.mockReturnValueOnce(true);
    claimPromoCode.mockRejectedValueOnce();

    return applyPromoCode(samplePromoCode)
      .then(() => {
        expect(validatePromoCode).toBeCalledWith(samplePromoCode);
        expect(claimPromoCode).toBeCalledWith(samplePromoCode);
        expect(PubSub.publish).toBeCalledWith('app:promo:rejected');
      });
  });

  it('publishes app:promo:invalid event to PubSub if the promo code format is invalid', () => {
    validatePromoCode.mockReturnValueOnce(false);

    return applyPromoCode(samplePromoCode)
      .then(() => {
        expect(validatePromoCode).toBeCalledWith(samplePromoCode);
        expect(claimPromoCode).not.toBeCalled();
        expect(PubSub.publish).toBeCalledWith('app:promo:invalid');
      });
  });
});