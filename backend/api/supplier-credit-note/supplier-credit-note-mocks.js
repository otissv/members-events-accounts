

export const supplierCreditNotesMock = [];

export default class SupplierCreditNoteMock {
  find (query) {
    if (Array.isArray(query)) return supplierCreditNotesMock.find(a => query.find(q => q._id === a._id));
    if (query._id) return supplierCreditNotesMock.filter(item => item._id === query._id)[0];
    return supplierCreditNotesMock;
  }

  findById (query) {
    return supplierCreditNotesMock.filter(item => item._id === query._id)[0];
  }

  findOne () {
    return supplierCreditNotesMock[0];
  }
}
