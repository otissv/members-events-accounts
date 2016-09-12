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
} from '../app-context.js';

export const supplierCreditNoteQueries = {
  supplierCreditNotesFind (_, args, { connectors, databases }) {
    return connectors.supplierCreditNote.find({ args, databases });
  },

  supplierCreditNoteFindById (_, args, { connectors, databases }) {
    return connectors.supplierCreditNote.findById({ args, databases });
  },

  supplierCreditNoteFindOne (_, args, { connectors, databases }) {
    console.log(connectors);
    return connectors.supplierCreditNote.findOne({ args, databases });
  }
};


export const SupplierCreditNote = {
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

  supplierInvoices (query, args, { connectors, databases }) {
    return supplierInvoices(query, connectors.supplierInvoices);
  },

  supplierOrders (query, args, { connectors, databases }) {
    return supplierOrders(query, connectors.supplierOrders);
  },

  updatedBy (query, args, { connectors, databases }) {
    return updatedBy(query, connectors.user);
  }
};
