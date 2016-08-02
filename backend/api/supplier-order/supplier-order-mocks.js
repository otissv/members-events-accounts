

export const supplierOrdersMock = [];

export default class SupplierOrderMock {
  find (query) {
    if (Array.isArray(query)) return supplierOrdersMock.find(a => query.find(q => q._id === a._id));
    if (query._id) return supplierOrdersMock.filter(item => item._id === query._id)[0];
    return supplierOrdersMock;
  }

  findById (query) {
    return supplierOrdersMock.filter(item => item._id === query._id)[0];
  }

  findOne () {
    return supplierOrdersMock[0];
  }
}
