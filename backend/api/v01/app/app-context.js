export function addresses (query, context) {
  return context.find(query.addresses);
}

export function address (query, context) {
  return context.findById(query.address._id);
}

export function billingAdderss (query, context) {
  return context.findById(query.billingAdderss._id);
}

export function eventCategory (query, context) {
  return context.findById(query.category._id);
}

export function client (query, context) {
  return context.findById(query.client._id);
}

export function clientCreditNotes (query, context) {
  return context.find(query.clientCreditNotes);
}

export function clientInvoices (query, context) {
  return context.find(query.clientInvoices);
}

export function clientOrders (query, context) {
  return context.find(query.clientOrders);
}

export function createdBy (query, context) {
  return context.findById(query.createdBy._id);
}

export function instructors (query, context) {
  return context.find(query.instructors);
}

export function ledgerAccount (query, context) {
  return context.findById(query.ledgerAccount._id);
}

export function notes (query, context) {
  return context.find(query.notes);
}

export function posting (query, context) {
  return context.findById(query.posting._id);
}

export function shippingAddress (query, context) {
  return context.findById(query.shippingAddress._id);
}

export function supplier (query, context) {
  return context.findById(query.supplier._id);
}

export function supplierCreditNotes (query, context) {
  return context.find(query.supplierCreditNotes);
}

export function supplierInvoices (query, context) {
  return context.find(query.supplierInvoices);
}

export function supplierOrders (query, context) {
  return context.find(query.supplierOrders);
}

export function updatedBy (query, context) {
  return context.findById(query.updatedBy._id);
}
