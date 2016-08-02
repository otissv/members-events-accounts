export default `
type SupplierCreditNote {
  _id 		     : String,
  amount       : String,
  clientId 		 : String,
  created      : String,
  createdBy    : User,
  invoicesIds  : String,
  notes        : [Note],
  postingId    : String,
  status       : String,
  updated      : String,
  updatedBy    : User
}
`;


export const supplierCreditNoteQueries = `
  supplierCreditNotesFind(_id: String, name: String): [SupplierCreditNote]
  supplierCreditNoteFindById(_id: String, name: String): SupplierCreditNote
  supplierCreditNoteFindOne(_id: String, name: String): SupplierCreditNote
`;
