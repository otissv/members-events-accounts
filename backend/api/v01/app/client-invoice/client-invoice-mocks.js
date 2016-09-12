import { find, findById, findOne } from '../../../../helpers/mock-helper';

export const clientInvoiceMock = [
  {
    _id 		          : '57c533a8df3b5e5af093da1f',
    billingAdderss    : { _id: '57509b5f350a10fb44e4c2b5' },
    client 		        : { _id: '563fb531007093486f3052ac' },
    clientCreditNotes : [{ _id: '57c52dd2516a067a6c7a6945' }],
    clientOrders      : [{ _id: '57c52dd2516a067a6c7a6946' }],
    created           : 'Mon Oct 12 2015 01:08:52 GMT+0200 (CEST)',
    createdBy         : { _id: '563fa9dd007093486f3052a5' },
    notes             : [{ _id: '563fa9dd007093486f3052n2' }],
    posting           : { _id: '57c46686511c610a2c266b8a' },
    shippingAddress   : { _id: '57509b5f350a10fb44e4c2b7' },
    shippingMethod    : 'xxxx',
    status            : 'active',
    updated           : 'Mon Aug 29 2016 11:14:52 GMT+0200 (CEST)',
    updatedBy         : { _id: '563fa9dd007093486f3052a5' }
  },

  {
    _id 		          : '57c533bc4a0e265c5a7a3109',
    billingAdderss    : { _id: '57509b5f350a10fb44e4c2b5' },
    client 		        : { _id: '563fb531007093486f3052ac' },
    clientCreditNotes : [{ _id: '57c52dd2516a067a6c7a6945' }],
    clientOrders      : [{ _id: '57c52dd2516a067a6c7a6946' }],
    created           : 'Mon Oct 12 2015 01:08:52 GMT+0200 (CEST)',
    createdBy         : { _id: '563fa9dd007093486f3052a5' },
    notes             : [{ _id: '563fa9dd007093486f3052n2' }],
    posting           : { _id: '57c46685a4320f09cf5a5682' },
    shippingAddress   : { _id: '57509b5f350a10fb44e4c2b7' },
    shippingMethod    : 'xxxx',
    status            : 'active',
    updated           : 'Mon Aug 29 2016 11:14:52 GMT+0200 (CEST)',
    updatedBy         : { _id: '563fa9dd007093486f3052a5' }
  }
];

export default class ClientInvoiceMock {
  find (query) { return find(query, clientInvoiceMock) }
  findById (query) { return findById(query, clientInvoiceMock) }
  findOne () { return findOne(clientInvoiceMock) }
}
