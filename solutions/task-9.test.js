import transactionsReducer from '../task-9/transactionsReducer';
import { addTransaction, removeTransaction, changeTransaction } from '../task-9/actions';

import generateGuid from '../task-9/generateGuid';
jest.mock('../task-9/generateGuid');

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

const sampleState = [transaction1, transaction2];

describe('transactionsReducer', () => {
  it('begins with an empty array by default', () => {
    expect(transactionsReducer()).toEqual([]);
  });

  it('handles addTransaction action', () => {
    generateGuid.mockImplementation(() => transaction1Id);

    expect(
      transactionsReducer([], addTransaction(transaction1Payload))
    ).toEqual([transaction1]);

    generateGuid.mockImplementation(() => transaction2Id);

    expect(
      transactionsReducer([transaction1], addTransaction(transaction2Payload))
    ).toEqual([
      transaction1,
      transaction2,
    ]);
  });

  it('handles removeTransaction action', () => {
    expect(
      transactionsReducer(sampleState, removeTransaction(transaction1Id))
    ).toEqual([transaction2]);
  });

  it('handles changeTransaction action', () => {
    const newTransactionData = {
      description: 'Changed transaction 2',
      category: 'Travels',
      value: 5.5,
    };

    expect(
      transactionsReducer(
        sampleState,
        changeTransaction(transaction2Id, newTransactionData),
      )
    ).toEqual([
      transaction1,
      {
        id: transaction2Id,
        ...newTransactionData,
      },
    ]);
  });

  it('ignores unknown actions', () => {
    expect(
      transactionsReducer(sampleState, { type: 'UNKNOWN_ACTION' })
    ).toBe(sampleState);
  });
});
