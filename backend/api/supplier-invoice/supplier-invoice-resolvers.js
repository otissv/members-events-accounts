import {
  billingAdderss,
  createdBy,
  notes,
  posting,
  shippingAddress,
  supplier,
  supplierCreditNotes,
  supplierOrders,
  updatedBy
} from '../context.js';

export const supplierInvoiceQueries = {
  supplierInvoicesFind (_, args, context) {
    return context.connectors.supplierInvoice.find(args);
  },

  supplierInvoiceFindById (_, args, context) {
    return context.connectors.supplierInvoice.findById(args);
  },

  supplierInvoiceFindOne (_, args, context) {
    return context.connectors.supplierInvoice.findOne(args);
  }
};


export const SupplierInvoice = {
  billingAdderss (query, args, context) {
    return billingAdderss(query, context.connectors.address);
  },

  createdBy (query, args, context) {
    return createdBy(query, context.connectors.user);
  },

  notes (query, args, context) {
    return notes(query, context.connectors.note);
  },

  posting (query, args, context) {
    return posting(query, context.connectors.posting);
  },

  shippingAddress (query, args, context) {
    return billingAdderss(query, context.connectors.address);
  },

  supplier (query, args, context) {
    return supplier(query, context.connectors.user);
  },

  supplierCreditNotes (query, args, context) {
    return supplierCreditNotes(query, context.connectors.supplierCreditNote);
  },

  supplierOrders (query, args, context) {
    return supplierOrders(query, context.connectors.supplierOrder);
  },

  updatedBy (query, args, context) {
    return updatedBy(query, context.connectors.user);
  }
};
