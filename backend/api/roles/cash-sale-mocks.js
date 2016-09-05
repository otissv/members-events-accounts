import { find, findById, findOne } from '../../helpers/mock-helper';

export const cashSalesMock = [
  {
     _id      : '57c46686511c610a2c266b89',
     amount   : 434.00,
     client 	: { _id: '563fb531007093486f3052ac' },
     discount : 348.00,
     posting  : { _id: '57c46686511c610a2c266b8a'},
     quanity  : 100,
     created: 'Fri Apr 15 2016 11:11:22 GMT+0200 (CEST)',
     updated: 'Sun Aug 28 2016 20:13:16 GMT+0200 (CEST)',
     createdBy: { _id: '563fa9dd007093486f3052a5' },
     updatedBy: { _id: '563fa9dd007093486f3052a5' },
     notes    : [
       { _id: '563fa9dd007093486f3052n1' },
       { _id: '563fa9dd007093486f3052n2' }
     ]
   },
  {
    _id      : '57c46686511c610a2c266b8b',
    amount   : 307.00,
    client 	 : { _id: '563fb531007093486f3052ac' },
    discount : 220.00,
    posting  : { _id: '57c46685a4320f09cf5a5682'},
    quanity  : 100,
    created: 'Mon Aug 29 2016 11:44:37 GMT+0200 (CEST)',
    updated: 'Sun Aug 28 2016 22:28:04 GMT+0200 (CEST)',
    createdBy: { _id: '563fa9dd007093486f3052a5' },
    updatedBy: { _id: '563fa9dd007093486f3052a5' },
    notes    : [
      { _id: '563fa9dd007093486f3052n1' },
      { _id: '563fa9dd007093486f3052n2' }
    ]
  }
];

export default class CashSaleMock {
  find (query) { return find(query, cashSalesMock) }
  findById (query) { return findById(query, cashSalesMock) }
  findOne () { return findOne(cashSalesMock) }
}
