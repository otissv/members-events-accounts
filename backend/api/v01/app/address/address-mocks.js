import { find, findById, findOne } from '../../../../helpers/mock-helper';


export const addressesMock = [
  {
    _id: '57509b5f350a10fb44e4c2b5',
    address1: '5529 Keira Shore',
    address2: 'Apt. 592',
    city: 'Blandashire',
    current: true,
    state: 'South Carolina',
    country: 'Virgin Islands, British',
    postCode: '81036-8340',
    rooms: '101',
    status:' active',
    created: 'Tue Sep 29 2015 15:03:08 GMT+0200 (CEST)',
    updated: 'Sun Jul 31 2016 03:06:40 GMT+0200 (CEST)',
    createdBy: { _id: '563fa9dd007093486f3052a5' },
    updatedBy: { _id: '563fa9dd007093486f3052a5' },
    notes: [
      { _id: '563fa9dd007093486f3052n1' },
      { _id: '563fa9dd007093486f3052n2' }
    ]
  },
  {
    _id: '57509b5f350a10fb44e4c2b7',
    address1: '3843 Kody Parks',
    address2: 'Apt. 408',
    city: 'South Lauriane',
    current: null,
    state: 'Louisiana',
    country: 'Barbados',
    postCode: '91845',
    rooms: '202',
    status: 'active',
    created: 'Tue Sep 29 2015 15:03:08 GMT+0200 (CEST)',
    updated: 'Sun Jul 31 2016 03:06:40 GMT+0200 (CEST)',
    createdBy: { _id: '563fa9dd007093486f3052a5' },
    updatedBy: { _id: '563fa9dd007093486f3052a5' },
    notes: [
      { _id: '563fa9dd007093486f3052n1' },
      { _id: '563fa9dd007093486f3052n2' }
    ]
  }
];

export default class AddressMock {
  find (query) { return find(query, addressesMock) }
  findById (query) { return findById(query, addressesMock) }
  findOne () { return findOne(addressesMock) }
}
