import {
  addresses,
  billingAdderss,
  createdBy,
  creditNotes,
  notes,
  posting,
  shippingAddress,
  updatedBy,
  supplier,
  supplierCreditNotes,
  supplierInvoices,
  supplierOrders
} from '../context.js';

export const supplierCreditNoteQueries = {
  supplierCreditNotesFind (_, args, context) {
    return context.connectors.supplierCreditNote.find(args);
  },

  supplierCreditNoteFindById (_, args, context) {
    return context.connectors.supplierCreditNote.findById(args);
  },

  supplierCreditNoteFindOne (_, args, context) {
    console.log(context.connectors);
    return context.connectors.supplierCreditNote.findOne(args);
  }
};


export const SupplierCreditNote = {
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

  supplierInvoices (query, args, context) {
    return supplierInvoices(query, context.connectors.supplierInvoices);
  },

  supplierOrders (query, args, context) {
    return supplierOrders(query, context.connectors.supplierOrders);
  },

  updatedBy (query, args, context) {
    return updatedBy(query, context.connectors.user);
  }
};
