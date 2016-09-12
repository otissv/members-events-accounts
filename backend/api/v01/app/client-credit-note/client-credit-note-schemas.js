export default `
type ClientCreditNote {
  _id 		        : String,
  billingAdderss  : Address,
  client    		  : User,
  clientInvoices  : [ClientInvoice]
  clientOrders    : [ClientOrder]
  created         : String,
  createdBy       : User,
  notes           : [Note],
  posting         : Posting,
  shippingAddress : Address,
  shippingMethod  : String,
  status          : String,
  updated         : String,
  updatedBy       : User
}
`;


export const clientCreditNoteQueries = `
  clientCreditNotesFind(_id: String, name: String): [ClientCreditNote]
  clientCreditNoteFindById(_id: String, name: String): ClientCreditNote
  clientCreditNoteFindOne(_id: String, name: String): ClientCreditNote
`;
