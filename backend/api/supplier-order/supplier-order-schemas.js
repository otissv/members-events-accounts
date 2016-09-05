export default `
type SupplierOrder {
  _id 		            : String,
  amount 		          : String,
  billingAdderss      : Address,
  created             : String,
  createdBy           : User,
  discount            : String,
  notes               : [Note],
  posting             : Posting,
  quanity 		        : String,
  shippingAddress     : String,
  shippingMethod      : String,
  status              : String,
  supplier            : User,
  supplierCreditNotes : [SupplierCreditNote],
  supplierInvoices    : [SupplierInvoice],
  updated             : String,
  updatedBy           : User
}
`;


export const supplierOrderQueries = `
  supplierOrdersFind(_id: String, name: String): [SupplierOrder]
  supplierOrderFindById(_id: String, name: String): SupplierOrder
  supplierOrderFindOne(_id: String, name: String): SupplierOrder
`;
