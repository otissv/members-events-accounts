import faker from 'faker';
import objectId from 'bson-objectid';

export const clientInvoiceMock = [];

export default class ClientInvoiceMock {
  find (query) {
    if (Array.isArray(query)) return clientInvoiceMock.find(a => query.find(q => q._id === a._id));
    if (query._id) return clientInvoiceMock.filter(item => item._id === query._id)[0];
    return clientInvoiceMock;
  }

  findById (query) {
    return clientInvoiceMock.filter(item => item._id === query._id)[0];
  }

  findOne () {
    return clientInvoiceMock[0];
  }
}
