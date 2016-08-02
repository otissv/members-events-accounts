

export const clientCreditNotesMock = [];

export default class CreditNoteMock {
  find (query) {
    if (Array.isArray(query)) return clientCreditNotesMock.find(a => query.find(q => q._id === a._id));
    if (query._id) return clientCreditNotesMock.filter(item => item._id === query._id)[0];
    return clientCreditNotesMock;
  }

  findById (query) {
    return clientCreditNotesMock.filter(item => item._id === query._id)[0];
  }

  findOne () {
    return clientCreditNotesMock[0];
  }
}
