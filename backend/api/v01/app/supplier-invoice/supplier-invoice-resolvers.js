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
} from '../app-context.js';

export const supplierInvoiceQueries = {
  supplierInvoicesFind (_, args, { connectors, databases }) {
    return connectors.supplierInvoice.find({ args, databases });
  },

  supplierInvoiceFindById (_, args, { connectors, databases }) {
    return connectors.supplierInvoice.findById({ args, databases });
  },

  supplierInvoiceFindOne (_, args, { connectors, databases }) {
    return connectors.supplierInvoice.findOne({ args, databases });
  }
};


export const SupplierInvoice = {
  billingAdderss (query, args, { connectors, databases }) {
    return billingAdderss(query, connectors.address);
  },

  createdBy (query, args, { connectors, databases }) {
    return createdBy(query, connectors.user);
  },

  notes (query, args, { connectors, databases }) {
    return notes(query, connectors.note);
  },

  posting (query, args, { connectors, databases }) {
    return posting(query, connectors.posting);
  },

  shippingAddress (query, args, { connectors, databases }) {
    return billingAdderss(query, connectors.address);
  },

  supplier (query, args, { connectors, databases }) {
    return supplier(query, connectors.user);
  },

  supplierCreditNotes (query, args, { connectors, databases }) {
    return supplierCreditNotes(query, connectors.supplierCreditNote);
  },

  supplierOrders (query, args, { connectors, databases }) {
    return supplierOrders(query, connectors.supplierOrder);
  },

  updatedBy (query, args, { connectors, databases }) {
    return updatedBy(query, connectors.user);
  }
};
