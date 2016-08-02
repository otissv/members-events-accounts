// import faker from 'faker';

// const {
//   date,
//   internet,
//   name,
//   phone
// } = faker;


export const usersMock = [
  {
    '_id': '563fa9dd007093486f3052a5',
    'addresses': [ '57509b5f350a10fb44e4c2b5' ],
    'created': 'Tue Sep 29 2015 15:03:08 GMT+0200 (CEST)',
    'createdBy': '563fb531007093486f3052ac',
    'notes': [
      '563fa9dd007093486f3052n1',
      '563fa9dd007093486f3052n2'
    ],
    'dateOfBirth': 'Thu Apr 14 2016 08:17:38 GMT+0200 (CEST)',
    'email': 'Blanca_Gusikowski@hotmail.com',
    'firstName': 'Maybell',
    'lastName': 'Ruecker',
    'lastLogin': 'Sun Jul 31 2016 02:04:13 GMT+0200 (CEST)',
    'telephone': '593-275-5288 x7369',
    'updated': 'Sun Jul 31 2016 03:06:40 GMT+0200 (CEST)',
    'updatedBy': '563fb531007093486f3052ac',
    'username': 'Evalyn.Treutel30'
  },
  {
    '_id': '563fb531007093486f3052ac',
    'addresses': [ '57509b5f350a10fb44e4c2b7' ],
    'created': 'Tue Sep 15 2015 19:47:25 GMT+0200 (CEST)',
    'createdBy': '563fa9dd007093486f3052a5',
    'notes': [
      '563fa9dd007093486f3052n1',
      '563fa9dd007093486f3052n2'
    ],
    'dateOfBirth': 'Mon Jun 13 2016 10:08:34 GMT+0200 (CEST)',
    'email': 'Doug31@yahoo.com',
    'firstName': 'Floyd',
    'lastName': 'Bogisich',
    'lastLogin': 'Sat Jul 30 2016 14:21:43 GMT+0200 (CEST)',
    'telephone': '535.224.8103',
    'updated': 'Sat Jul 30 2016 17:54:42 GMT+0200 (CEST)',
    'updatedBy': '563fa9dd007093486f3052a5',
    'username': 'Korey_McClure65'
  }
];

export default class UserMock {
  find (query) {
    if (Array.isArray(query)) return usersMock.find(a => query.find(q => q._id === a._id));
    if (query._id) return usersMock.filter(item => item._id === query._id)[0];
    return usersMock;
  }

  findById (query) {
    return usersMock.filter(item => item._id === query._id)[0];
  }

  findOne () {
    return usersMock[0];
  }
}
