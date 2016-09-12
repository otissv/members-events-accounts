import { find, findById, findOne } from '../../../../helpers/mock-helper';

export const supplierInvoicesMock = [];

export default class SupplierInvoiceMock {
  find (query) { return find(query, supplierInvoicesMock) }
  findById (query) { return findById(query, supplierInvoicesMock) }
  findOne () { return findOne(supplierInvoicesMock) }
}
