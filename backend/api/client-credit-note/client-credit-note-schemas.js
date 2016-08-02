

export default `
type ClientCreditNote {
  _id 		        : String,
  billingAdderss  : String,
  clientId 		    : String,
  created         : String,
  createdBy       : User,
  creditNoteIds   : String,
  notes           : [Note],
  orderId         : String,
  postingId       : String,
  shippingAddress : String,
  shippingMethod  : String,
  status          : String,
  updated         : String,
  updatedBy       : User
}
`;


export const clientCreditNoteQueries = `
  clientCreditNotesFind(_id: String, name: String): [ClientInvoice]
  clientCreditNoteFindById(_id: String, name: String): ClientInvoice
  clientCreditNoteFindOne(_id: String, name: String): ClientInvoice
`;
