import faker from 'faker';

// const {
//   date
// } = faker;


export const authentiactionsMock = [
  {
    _id      : '563fa9dd007093486f3052a5',
    password : 'password',
    token    : 'this_is_my_token',
    roles    : ['admin'],
    created  : 'Wed May 11 2016 01:29:39 GMT+0200 (CEST)',
  },
  // {
  //   _id            : '563fb531007093486f3052ac',
  //   created        : 'Tue Jan 19 2016 07:34:10 GMT+0100 (CET)',
  //   createdBy      : '563fa9dd007093486f3052a5',
  //   updated        : 'Sun Jul 31 2016 11:58:19 GMT+0200 (CEST)',
  //   updatedBy      : '563fa9dd007093486f3052a5'
  // }
];

export default class AuthentiactionMock {
  authenticate (query) {
    return authentiactionsMock[0]
    // if (Array.isArray(query)) return authentiactionsMock.find(a => query.find(q => q._id === a._id));
    // if (query._id) return authentiactionsMock.filter(item => item._id === query._id)[0];
    // return authentiactionsMock;
  }

  register (query) {
    return {
      token: 'myToken'
    }
  }

  unauthenticate (data) {
    return authentiactionsMock[0];
  }
}
