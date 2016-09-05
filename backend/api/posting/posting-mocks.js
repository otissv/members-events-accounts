import faker from 'faker'
import { find, findById, findOne } from '../../helpers/mock-helper';

export const postingsMock = [
  {
    _id        		 : '57c46686511c610a2c266b8a',
    category       : 'expense',
    created        : 'Sat Oct 17 2015 01:40:32 GMT+0200 (CEST)',
    credit     		 : null,
    currency   		 : 'PLN',
    debit     		 : 66.10,
    description		 : null,
    discount       : null,
    ledgerAccount  : { _id: '57c4746426f5db01ad8f5edd' },
    reference      : null,
    transactionType: 'invoice',
    updated        : 'Wed Aug 31 2016 09:46:14 GMT+0200 (CEST)',
    createdBy      : { _id: '563fa9dd007093486f3052a5' },
    updatedBy      : { _id: '563fa9dd007093486f3052a5' },
    notes: [
      { _id: '563fa9dd007093486f3052n1' },
      { _id: '563fa9dd007093486f3052n2' }
    ]

  },
  {
    _id        		 : '57c46685a4320f09cf5a5682',
    category       : 'income',
    created        : 'Sat Oct 17 2015 01:40:32 GMT+0200 (CEST)',
    credit     		 : 575.00,
    currency  		 : 'PLN',
    debit          : null,
    description		 : null,
    discount       : null,
    ledgerAccount  : { _id: '57c4746426f5db01ad8f5ed' },
    reference      : null,
    transactionType: 'sale',
    updated        : 'Wed Aug 31 2016 09:46:14 GMT+0200 (CEST)',
    createdBy      : { _id: '563fa9dd007093486f3052a5' },
    updatedBy      : { _id: '563fa9dd007093486f3052a5' },
    notes: [
      { _id: '563fa9dd007093486f3052n1' },
      { _id: '563fa9dd007093486f3052n2' }
    ]
  }
];

export default class PostingMock {
  find (query) { return find(query, postingsMock) }
  findById (query) { return findById(query, postingsMock) }
  findOne () { return findOne(postingsMock) }
}
