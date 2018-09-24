import nock from 'nock';
import claimPromoCode from '../task-2/claimPromoCode';

describe('claimPromoCode', () => {
  it('returns true if the promo code has been successfully claimed', () => {
    nock('http://example.com')
      .get('/api/promos/claim?code=NICE-VALID-CODE')
      .reply(200);

    expect(claimPromoCode('NICE-VALID-CODE')).resolves.toBe('Code has been claimed');
  });

  it('returns false if the promo code has been rejected', () => {
    nock('http://example.com')
      .get('/api/promos/claim?code=SOME-INVALID-CODE')
      .reply(400);

    expect(claimPromoCode('SOME-INVALID-CODE')).rejects.toBe('Code has been rejected');
  });
});