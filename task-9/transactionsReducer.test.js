import transactionsReducer from './transactionsReducer';
import { addTransaction, removeTransaction, changeTransaction } from './actions';

import generateGuid from './generateGuid';
jest.mock('./generateGuid');

const transaction1Payload = {
  description: 'Transaction 1',
  category: 'Grocery',
  value: 1.0,
};
const transaction1Id = '0000-00000-0000';
const transaction1 = {
  ...transaction1Payload,
  id: transaction1Id,
};

const transaction2Payload = {
  description: 'Transaction 2',
  category: 'Commuting',
  value: 65.9,
};
const transaction2Id = '1111-22222-3333';
const transaction2 = {
  ...transaction2Payload,
  id: transaction2Id,
};

describe('transactionsReducer', () => {
  it('begins with an empty array by default', () => {
  });

  it('handles addTransaction action', () => {
    generateGuid.mockImplementation(() => transaction1Id);

    expect(
      transactionsReducer([], addTransaction(transaction1Payload))
    ).toEqual([transaction1]);

    // add one more transaction...
  });

  it('handles removeTransaction action', () => {
  });

  it('handles changeTransaction action', () => {
  });

  it('ignores unknown actions', () => {
  });
});
