export const clientOrdersMock = [];

export default class ClientOrderMock {
  find (query) {
    if (Array.isArray(query)) return clientOrdersMock.find(a => query.find(q => q._id === a._id));
    if (query._id) return clientOrdersMock.filter(item => item._id === query._id)[0];
    return clientOrdersMock;
  }

  findById (query) {
    return clientOrdersMock.filter(item => item._id === query._id)[0];
  }

  findOne () {
    return clientOrdersMock[0];
  }
}
