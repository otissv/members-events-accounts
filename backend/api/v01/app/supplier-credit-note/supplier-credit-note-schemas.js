export default `
type SupplierCreditNote {
  _id 		            : String,
  billingAdderss      : Address,
  amount              : Int,
  created             : String,
  createdBy           : User,
  notes               : [Note],
  posting             : Posting,
  shippingAddress     : Address,
  shippingMethod      : String,
  status              : String,
  supplier            : User,
  supplierInvoices    : [SupplierInvoice],
  supplierOrders      : [SupplierOrder],
  updated             : String,
  updatedBy           : User
}
`;


export const supplierCreditNoteQueries = `
  supplierCreditNotesFind(_id: String, name: String): [SupplierCreditNote]
  supplierCreditNoteFindById(_id: String, name: String): SupplierCreditNote
  supplierCreditNoteFindOne(_id: String, name: String): SupplierCreditNote
`;
