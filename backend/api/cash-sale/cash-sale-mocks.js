import faker from 'faker';
import objectId from 'bson-objectid';

const {
  amount
} = faker.finance;

export const cashSalesMock = [
  {
    _id        		 : objectId(),
    amount 		     : amount(),
    discount       : amount(),
    postingId      : objectId(),
    quanity    		 : 100
  },
  {
    _id        		 : objectId(),
    amount 		     : amount(),
    discount       : amount(),
    postingId      : objectId(),
    quanity    		 : 100
  }
];

export default class CashSaleMock {
  find (query) {
    if (Array.isArray(query)) return cashSalesMock.find(a => query.find(q => q._id === a._id));
    if (query._id) return cashSalesMock.filter(item => item._id === query._id)[0];
    return cashSalesMock;
  }

  findById (query) {
    return cashSalesMock.filter(item => item._id === query._id)[0];
  }

  findOne () {
    return cashSalesMock[0];
  }
}
