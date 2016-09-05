import { find, findById, findOne } from '../../helpers/mock-helper';


export const ledgerAccountsMock = [
  {
    _id        :'57c4746426f5db01ad8f5edd',
    name       : 'Savings Account',
    description: `This is a Savings Account`,
    status     : 'active',
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
    _id        : '57c4746426f5db01ad8f5ed',
    name       : 'Investment Account',
    description: `This is a Investment Account`,
    status     : 'active',
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


export default class LedgerAccountMock {
  find (query) { return find(query, ledgerAccountsMock) }
  findById (query) { return findById(query, ledgerAccountsMock) }
  findOne () { return findOne(ledgerAccountsMock) }
}
