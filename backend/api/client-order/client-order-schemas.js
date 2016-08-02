export default `
type ClientOrder {
  _id 		     : String,
  amount 		   : String,
  created      : String,
  createdBy    : User,
  discount     : String,
  notes        : [Note],
  postingId    : String,
  quanity 		 : String,
  updated      : String,
  updatedBy    : User
 }
`;

export const clientOrderQueries = `
  clientOrdersFind(_id: String, name: String): [ClientOrder]
  clientOrderFindById(_id: String, name: String): ClientOrder
  clientOrderFindOne(_id: String, name: String): ClientOrder
`;
