export default `
type SupplierCreditNote {
  _id        		 : String,
  amount         : String,
  clientId   		 : String,  
  notesIds  		 : String, 
  postingId      : String,
  status         : String,
  invoicesIds    : String
}
`;


export const supplierCreditNoteQueries = `
	supplierCreditNotesFind(_id: String, name: String): [SupplierCreditNote]
  supplierCreditNoteFindOne(_id: String, name: String): SupplierCreditNote
`;