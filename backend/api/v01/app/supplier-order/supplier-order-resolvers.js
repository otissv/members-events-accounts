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
} from '../app-context.js';


export const supplierOrderQueries =  {
  supplierOrdersFind (_, args, { connectors, databases }) {
    return connectors.supplierOrder.find({ args, databases });
  },

  supplierOrderFindById (_, args, { connectors, databases }) {
    return connectors.supplierOrder.findById({ args, databases });
  },

  supplierOrderFindOne (_, args, { connectors, databases }) {
    return connectors.supplierOrder.findOne({ args, databases });
  }
};


export const SupplierOrder = {
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

  supplierInvoices (query, args, { connectors, databases }) {
    return supplierInvoices(query, connectors.supplierInvoice);
  },

  updatedBy (query, args, { connectors, databases }) {
    return updatedBy(query, connectors.user);
  }
};
