import { find, findById, findOne } from '../../helpers/mock-helper';

export const supplierCreditNotesMock = [];

export default class SupplierCreditNoteMock {
  find (query) { return find(query, supplierCreditNotesMock) }
  findById (query) { return findById(query, supplierCreditNotesMock) }
  findOne () { return findOne(supplierCreditNotesMock) }
}
