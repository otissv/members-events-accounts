import faker from 'faker';
import objectId from 'bson-objectid';

const {
  amount,
  transactionType
} = faker.finance;

export const postingsMock = [
  {
    _id        		 : objectId(),
    debit     		 : amount,
    categoryId     : objectId(),
    currencyId 		 : objectId(),
    description		 : null,
    ledgerAccountId: objectId(),
    reference      : null,
    transactionType: transactionType()
  },
  {
    _id        		 : objectId(),
    debit     		 : amount,
    categoryId     : objectId(),
    currencyId 		 : objectId(),
    description		 : null,
    ledgerAccountId: objectId(),
    reference      : null,
    transactionType: transactionType()
  }
];

export default class PostingMock {
  find (query) {
    if (Array.isArray(query)) return postingsMock.find(a => query.find(q => q._id === a._id));
    if (query._id) return postingsMock.filter(item => item._id === query._id)[0];
    return postingsMock;
  }

  findById (query) {
    return postingsMock.filter(item => item._id === query._id)[0];
  }

  findOne () {
    return postingsMock[0];
  }
}
