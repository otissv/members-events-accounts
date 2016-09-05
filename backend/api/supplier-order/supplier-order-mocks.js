import { find, findById, findOne } from '../../helpers/mock-helper';

export const supplierOrdersMock = [];

export default class SupplierOrderMock {
  find (query) { return find(query, supplierOrdersMock) }
  findById (query) { return findById(query, supplierOrdersMock) }
  findOne () { return findOne(supplierOrdersMock) }
}
