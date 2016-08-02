import faker from 'faker';
import objectId from 'bson-objectid';


const {
  accountName
} = faker.finance;

export const ledgerAccountsMock = [
  {
    _id        : objectId(),
    name       : accountName(),
    description: `This is a ${accountName()}`,
    status     : 'active'
  },
  {
    _id        : objectId(),
    name       : accountName(),
    description: `This is a ${accountName()}`,
    status     : 'active'
  }
];

export default class LedgerAccountMock {
  find (query) {
    if (Array.isArray(query)) return ledgerAccountsMock.find(a => query.find(q => q._id === a._id));
    if (query._id) return ledgerAccountsMock.filter(item => item._id === query._id)[0];
    return ledgerAccountsMock;
  }

  findById (query) {
    return ledgerAccountsMock.filter(item => item._id === query._id)[0];
  }

  findOne () {
    return ledgerAccountsMock[0];
  }
}
