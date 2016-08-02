export default `
type ClientInvoice {
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


export const clientInvoiceQueries = `
  clientInvoicesFind(_id: String, name: String): [ClientInvoice]
  clientInvoiceFindById(_id: String, name: String): ClientInvoice
  clientInvoiceFindOne(_id: String, name: String): ClientInvoice
`;
