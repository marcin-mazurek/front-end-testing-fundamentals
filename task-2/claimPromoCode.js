import fetch from 'isomorphic-fetch';

export default function claimPromoCode(code) {
  return fetch('http://example.com/api/promos/claim?code=' + code)
    .then(response => {
      if (response.status === 200) {
        return Promise.resolve('Code has been claimed');
      } else {
        return Promise.reject('Code has been rejected');
      }
    });
}