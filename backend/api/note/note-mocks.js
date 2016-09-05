import { find, findById, findOne } from '../../helpers/mock-helper';

export const notesMock = [
  {
    _id      : '563fa9dd007093486f3052n1',
    note     : 'This is note 1',
    created  : 'Wed May 11 2016 01:29:39 GMT+0200 (CEST)',
    createdBy: { _id: '563fa9dd007093486f3052a5' },
    updated  : 'Sun Jul 31 2016 19:28:24 GMT+0200 (CEST)',
    flag     : true,
    updatedBy: { _id: '563fa9dd007093486f3052a5' }
  },
  {
    _id      : '563fa9dd007093486f3052n2',
    note     : 'This is note 2',
    created  : 'Tue Jan 19 2016 07:34:10 GMT+0100 (CET)',
    createdBy: { _id: '563fa9dd007093486f3052a5' },
    updated  : 'Sun Jul 31 2016 11:58:19 GMT+0200 (CEST)',
    flag     : false,
    updatedBy: { _id: '563fa9dd007093486f3052a5' }
  }
];

export default class NoteMock {
  find (query) { return find(query, notesMock) }
  findById (query) { return findById(query, notesMock) }
  findOne () { return findOne(notesMock) }
}
