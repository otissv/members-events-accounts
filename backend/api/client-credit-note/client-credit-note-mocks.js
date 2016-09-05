import { find, findById, findOne } from '../../helpers/mock-helper';

export const clientCreditNotesMock = [
  {
    _id 		        : '57c52dd2516a067a6c7a6945',
    billingAdderss  : { _id: '57509b5f350a10fb44e4c2b5' },
    client    		  : { _id: '563fb531007093486f3052ac' },
    clientInvoices  : [{ _id: '57c533a8df3b5e5af093da1f' }],
    clientOrders    : [{ _id: '57c52dd2516a067a6c7a6946' }],
    created         : 'Mon May 16 2016 03:11:55 GMT+0200 (CEST)',
    createdBy       : { _id: '563fb531007093486f3052ac' },
    notes           : [{ _id: '563fa9dd007093486f3052n1' }],
    posting         : { _id: '57c46686511c610a2c266b8a' },
    shippingAddress : { _id: '57509b5f350a10fb44e4c2b7' },
    shippingMethod  : 'xxx',
    status          : 'active',
    updated         : 'Mon Aug 29 2016 08:55:16 GMT+0200 (CEST)',
    updatedBy       :  { _id: '563fb531007093486f3052ac' },
  },

  {
    _id 		        : '57c52dd2516a067a6c7a6947',
    billingAdderss  : { _id: '57509b5f350a10fb44e4c2b5' },
    client    		  : { _id: '563fb531007093486f3052ac' },
    clientInvoices  : [{ _id: '57c533a8df3b5e5af093da1f' }],
    clientOrders    : [{ _id: '57c52dd2516a067a6c7a6946' }],
    created         : 'Tue Jul 12 2016 06:55:00 GMT+0200 (CEST)',
    createdBy       : { _id: '563fb531007093486f3052ac' },
    notes           : [{ _id: '563fa9dd007093486f3052n1' }],
    posting         : { _id: '57c46685a4320f09cf5a5682' },
    shippingAddress : { _id: '57509b5f350a10fb44e4c2b7' },
    shippingMethod  : 'xxx',
    status          : 'active',
    updated         : 'Tue Aug 30 2016 00:18:37 GMT+0200 (CEST)',
    updatedBy       :  { _id: '563fb531007093486f3052ac' },
  }
];

export default class CreditNoteMock {
  find (query) { return find(query, clientCreditNotesMock) }
  findById (query) { return findById(query, clientCreditNotesMock) }
  findOne () { return findOne(clientCreditNotesMock) }
}
