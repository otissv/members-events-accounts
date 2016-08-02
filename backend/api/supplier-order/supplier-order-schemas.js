export default `
type SupplierOrder {
  _id 		     : String,
  amount 		   : String,
  discount     : String,
  postingId    : String,
  quanity 		 : String,
  created      : String,
  createdBy    : User,
  notes        : [Note],
  updated      : String,
  updatedBy    : User
}
`;


export const supplierOrderQueries = `
  supplierOrdersFind(_id: String, name: String): [SupplierOrder]
  supplierOrderFindById(_id: String, name: String): SupplierOrder
  supplierOrderFindOne(_id: String, name: String): SupplierOrder
`;
