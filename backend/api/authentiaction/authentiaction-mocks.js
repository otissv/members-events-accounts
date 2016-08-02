import faker from 'faker';

// const {
//   date
// } = faker;


export const authentiactionsMock = [
  {
    _id      : '563fa9dd007093486f3052n1',
    authentiaction     : 'This is authentiaction 1',
    created  : 'Wed May 11 2016 01:29:39 GMT+0200 (CEST)',
    createdBy: '563fa9dd007093486f3052a5',
    updated  : 'Sun Jul 31 2016 19:28:24 GMT+0200 (CEST)',
    updatedBy: '563fa9dd007093486f3052a5'
  },
  {
    _id      : '563fa9dd007093486f3052n2',
    authentiaction     : 'This is authentiaction 2',
    created  : 'Tue Jan 19 2016 07:34:10 GMT+0100 (CET)',
    createdBy: '563fa9dd007093486f3052a5',
    updated  : 'Sun Jul 31 2016 11:58:19 GMT+0200 (CEST)',
    updatedBy: '563fa9dd007093486f3052a5'
  }
];

export default class AuthentiactionMock {
  authentiacte (query) {
    if (Array.isArray(query)) return authentiactionsMock.find(a => query.find(q => q._id === a._id));
    if (query._id) return authentiactionsMock.filter(item => item._id === query._id)[0];
    return authentiactionsMock;
  }

  register (query) {
    return authentiactionsMock.filter(item => item._id === query._id)[0];
  }

  unauthentiacte () {
    return authentiactionsMock[0];
  }
}
