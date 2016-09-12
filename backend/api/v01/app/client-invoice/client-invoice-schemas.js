export default `
type ClientInvoice {
  _id 		         : String,
  billingAdderss   : Address,
  client 		       : User,
  clientCreditNotes: [ClientCreditNote],
  clientOrders     : [ClientOrder],
  created          : String,
  createdBy        : User,
  notes            : [Note],
  posting          : Posting,
  shippingAddress  : Address,
  shippingMethod   : String,
  status           : String,
  updated          : String,
  updatedBy        : User
}
`;


export const clientInvoiceQueries = `
  clientInvoicesFind(_id: String, name: String): [ClientInvoice]
  clientInvoiceFindById(_id: String, name: String): ClientInvoice
  clientInvoiceFindOne(_id: String, name: String): ClientInvoice
`;
