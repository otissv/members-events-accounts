

export default `
type ClientCreditNote {
  _id        		  : String,
  clientId   		  : String,
  creditNoteIds   : String,
  billingAdderss  : String,
  notesIds        : String,
  orderId         : String,   
  postingId       : String,
  shippingMethod  : String,
  shippingAddress : String,
  status          : String
}
`;


export const clientCreditNoteQueries = `
	clientCreditNotesFind(_id: String, name: String): [ClientInvoice]
  clientCreditNoteFindOne(_id: String, name: String): ClientInvoice
`;