import {
  billingAdderss,
  client,
  createdBy,
  clientCreditNotes,
  clientOrders,
  notes,
  posting,
  shippingAddress,
  updatedBy
} from '../app-context.js';


export const clientInvoiceQueries = {
  clientInvoicesFind (_, args, { connectors, databases }) {
    return connectors.clientInvoice.find({ args, databases });
  },

  clientInvoiceFindById (_, args, { connectors, databases }) {
    return connectors.clientInvoice.findById({ args, databases });
  },

  clientInvoiceFindOne (_, args, { connectors, databases }) {
    return connectors.clientInvoice.findOne({ args, databases });
  }
};


export const ClientInvoice = {
  billingAdderss (query, args, { connectors, databases }) {
    return billingAdderss(query, connectors.address);
  },

  client (query, args, { connectors, databases }) {
    return client(query, connectors.user);
  },

  clientCreditNotes (query, args, { connectors, databases }) {
    return clientCreditNotes(query, connectors.clientCreditNote);
  },

  clientOrders (query, args, { connectors, databases }) {
    return clientOrders(query, connectors.clientOrder);
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

  updatedBy (query, args, { connectors, databases }) {
    return updatedBy(query, connectors.user);
  }
};
