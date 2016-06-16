export default `
type ClientOrder {
	_id        		 : String,
	amount 		     : String,
  discount       : String,
  notesIds       : String,
  postingId      : String,
  quanity    		 : String
 }
`;

export const clientOrderQueries = `
	clientOrdersFind(_id: String, name: String): [ClientOrder]
	clientOrderFindOne(_id: String, name: String): ClientOrder
`;