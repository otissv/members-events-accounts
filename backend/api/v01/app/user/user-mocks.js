import { find, findById, findOne } from '../../../../helpers/mock-helper';


export const usersMock = [
  {
    '_id': '563fa9dd007093486f3052a5',
    'addresses': [ { _id: '57509b5f350a10fb44e4c2b5', _id: '57509b5f350a10fb44e4c2b7'} ],
    'created': 'Tue Sep 29 2015 15:03:08 GMT+0200 (CEST)',
    'createdBy': { _id: '563fb531007093486f3052ac' },
    'notes': [
      { _id: '563fa9dd007093486f3052n1' },
      { _id: '563fa9dd007093486f3052n2' }
    ],
    'dateOfBirth': 'Thu Apr 14 2016 08:17:38 GMT+0200 (CEST)',
    'email': 'Blanca_Gusikowski@hotmail.com',
    'firstName': 'Maybell',
    'lastName': 'Ruecker',
    'lastLogin': 'Sun Jul 31 2016 02:04:13 GMT+0200 (CEST)',
    'telephone': '593-275-5288 x7369',
    'updated': 'Sun Jul 31 2016 03:06:40 GMT+0200 (CEST)',
    'updatedBy':  { _id: '563fb531007093486f3052ac' },
    'username': 'Evalyn.Treutel30'
  },
  {
    '_id': '563fb531007093486f3052ac',
    'addresses': [ { _id: '57509b5f350a10fb44e4c2b7' } ],
    'created': 'Tue Sep 15 2015 19:47:25 GMT+0200 (CEST)',
    'createdBy': { _id: '563fa9dd007093486f3052a5' },
    'notes': [
      { _id: '563fa9dd007093486f3052n1' },
      { _id: '563fa9dd007093486f3052n2' }
    ],
    'dateOfBirth': 'Mon Jun 13 2016 10:08:34 GMT+0200 (CEST)',
    'email': 'Doug31@yahoo.com',
    'firstName': 'Floyd',
    'lastName': 'Bogisich',
    'lastLogin': 'Sat Jul 30 2016 14:21:43 GMT+0200 (CEST)',
    'telephone': '535.224.8103',
    'updated': 'Sat Jul 30 2016 17:54:42 GMT+0200 (CEST)',
    'updatedBy':  { _id: '563fa9dd007093486f3052a5' },
    'username': 'Korey_McClure65'
  }
];

export default class UserMock {
  find (query) { return find(query, usersMock) }
  findById (query) { return findById(query, usersMock) }
  findOne () { return findOne(usersMock) }
}
