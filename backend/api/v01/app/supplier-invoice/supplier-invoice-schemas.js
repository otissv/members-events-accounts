export default `
type SupplierInvoice {
  _id 		            : String,
  billingAdderss      : Address,
  created             : String,
  createdBy           : User,
  notes               : [Note],
  orderId             : String,
  posting             : Posting,
  shippingAddress     : String,
  shippingMethod      : String,
  status              : String,
  supplier            : User,
  supplierCreditNotes : [SupplierCreditNote],
  supplierOrders      : [SupplierOrder],
  updated             : String,
  updatedBy           : User
}
`;


export const supplierInvoiceQueries = `
  supplierInvoicesFind(_id: String, name: String): [SupplierInvoice]
  supplierInvoiceFindById(_id: String, name: String): SupplierInvoice
  supplierInvoiceFindOne(_id: String, name: String): SupplierInvoice
`;
