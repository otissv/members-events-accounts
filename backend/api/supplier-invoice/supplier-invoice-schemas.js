export default `
type SupplierInvoice {
  _id 		        : String,
  billingAdderss  : String,
  created         : String,
  createdBy       : User,
  creditNoteIds   : String,
  notes           : [Note],
  orderId         : String,
  postingId       : String,
  shippingAddress : String,
  shippingMethod  : String,
  status          : String,
  supplierId 		  : String,
  updated         : String,
  updatedBy       : User
}
`;


export const supplierInvoiceQueries = `
  supplierInvoicesFind(_id: String, name: String): [SupplierInvoice]
  supplierInvoiceFindById(_id: String, name: String): SupplierInvoice
  supplierInvoiceFindOne(_id: String, name: String): SupplierInvoice
`;
