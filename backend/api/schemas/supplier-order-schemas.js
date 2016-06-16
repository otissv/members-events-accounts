export default `
type SupplierOrder {
	_id        		 : String,
	amount 		     : String,
  discount       : String,
  notesIds       : String,
  postingId      : String,
  quanity    		 : String
}
`;


export const supplierOrderQueries = `
	supplierOrdersFind(_id: String, name: String): [SupplierOrder]
	supplierOrderFindOne(_id: String, name: String): SupplierOrder
`;