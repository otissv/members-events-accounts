import {
  billingAdderss,
  client,
  clientCreditNotes,
  clientInvoices,
  createdBy,
  notes,
  posting,
  shippingAddress,
  updatedBy
} from '../app-context.js';


export const clientOrderQueries = {
  clientOrdersFind (_, args, { connectors, databases }) {
    return connectors.clientOrder.find({ args, databases });
  },

  clientOrderFindById (_, args, { connectors, databases }) {
    return connectors.clientOrder.findById({ args, databases });
  },

  clientOrderFindOne (_, args, { connectors, databases }) {
    return connectors.clientOrder.findOne({ args, databases });
  }
};


export const ClientOrder = {
  billingAdderss (query, args, { connectors, databases }) {
    return billingAdderss(query, connectors.address);
  },

  client (query, args, { connectors, databases }) {
    return client(query, connectors.user);
  },

  clientCreditNotes (query, args, { connectors, databases }) {
    return clientCreditNotes(query, connectors.clientCreditNote);
  },

  clientInvoices (query, args, { connectors, databases }) {
    return clientInvoices(query, connectors.clientInvoice);
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
