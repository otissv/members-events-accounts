export default `
type SupplierInvoice {
  _id        		  : String,
  supplierId   		  : String,
  creditNoteIds   : String,
  billingAdderss  : String,
  notesIds        : String,
  orderId         : String,   
  postingId       : String,
  shippingMethod  : String,
  shippingAddress : String,
  status          : String
}
`;


export const supplierInvoiceQueries = `
	supplierInvoicesFind(_id: String, name: String): [SupplierInvoice]
  supplierInvoiceFindOne(_id: String, name: String): SupplierInvoice
`;