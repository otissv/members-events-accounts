
export const supplierInvoicesMock = [];

export default class SupplierInvoiceMock {
  find (query) {
    if (Array.isArray(query)) return supplierInvoicesMock.find(a => query.find(q => q._id === a._id));
    if (query._id) return supplierInvoicesMock.filter(item => item._id === query._id)[0];
    return supplierInvoicesMock;
  }

  findById (query) {
    return supplierInvoicesMock.filter(item => item._id === query._id)[0];
  }

  findOne () {
    return supplierInvoicesMock[0];
  }
}
