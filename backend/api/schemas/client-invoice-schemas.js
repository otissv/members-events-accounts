export default `
type ClientInvoice {
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


export const clientInvoiceQueries = `
	clientInvoicesFind(_id: String, name: String): [ClientInvoice]
  clientInvoiceFindOne(_id: String, name: String): ClientInvoice
`;