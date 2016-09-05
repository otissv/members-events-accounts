import {
  billingAdderss,
  createdBy,
  notes,
  posting,
  shippingAddress,
  supplier,
  supplierCreditNotes,
  supplierInvoices,
  updatedBy
} from '../context.js';


export const supplierOrderQueries =  {
  supplierOrdersFind (_, args, context) {
    return context.connectors.supplierOrder.find(args);
  },

  supplierOrderFindById (_, args, context) {
    return context.connectors.supplierOrder.findById(args);
  },

  supplierOrderFindOne (_, args, context) {
    return context.connectors.supplierOrder.findOne(args);
  }
};


export const SupplierOrder = {
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

  supplierInvoices (query, args, context) {
    return supplierInvoices(query, context.connectors.supplierInvoice);
  },

  updatedBy (query, args, context) {
    return updatedBy(query, context.connectors.user);
  }
};
