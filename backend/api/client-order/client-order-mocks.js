import { find, findById, findOne } from '../../helpers/mock-helper';

export const clientOrdersMock = [
  {
    _id               : '57c52dd2516a067a6c7a6946',
    amount 		        : 489.59,
    billingAdderss    : { _id: '57509b5f350a10fb44e4c2b5' },
    client 		        : { _id: '563fb531007093486f3052ac' },
    clientCreditNotes : [{ _id: '57c52dd2516a067a6c7a6945' }],
    clientInvoices    : [{ _id: '57c533a8df3b5e5af093da1f' }],
    created           : 'Tue Sep 29 2015 15:03:08 GMT+0200 (CEST)',
    createdBy         : { _id: '563fa9dd007093486f3052a5' },
    discount          : '10%',
    notes             : [
      { _id: '563fa9dd007093486f3052n1' },
      { _id: '563fa9dd007093486f3052n2' }
    ],
    posting           : { _id: '57c46686511c610a2c266b8a' },
    quanity 		      : 10,
    shippingAddress   : { _id: '57509b5f350a10fb44e4c2b7' },
    shippingMethod    : 'XXXX',
    status            : 'active',
    updated           : 'Sun Jul 31 2016 03:06:40 GMT+0200 (CEST)',
    updatedBy         : { _id: '563fa9dd007093486f3052a5' }
  }
];

export default class ClientOrderMock {
  find (query) { return find(query, clientOrdersMock) }
  findById (query) { return findById(query, clientOrdersMock) }
  findOne () { return findOne(clientOrdersMock) }
}
