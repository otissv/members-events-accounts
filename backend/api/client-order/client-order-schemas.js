export default `
type ClientOrder {
  _id 		         : String,
  billingAdderss   : Address,
  amount 		       : String,
  client 		       : User,
  clientCreditNotes: [ClientCreditNote]
  clientInvoices   : [ClientInvoice],
  created          : String,
  createdBy        : User,
  discount         : String,
  notes            : [Note],
  posting          : Posting,
  quanity 		     : String,
  shippingAddress  : Address,
  shippingMethod   : String,
  status           : String,
  updated          : String,
  updatedBy        : User
 }
`;

export const clientOrderQueries = `
  clientOrdersFind(_id: String, name: String): [ClientOrder]
  clientOrderFindById(_id: String, name: String): ClientOrder
  clientOrderFindOne(_id: String, name: String): ClientOrder
`;
