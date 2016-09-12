import {
  billingAdderss,
  client,
  clientInvoices,
  clientOrders,
  createdBy,
  notes,
  posting,
  shippingAddress,
  updatedBy
} from '../app-context.js';


export const clientCreditNoteQueries = {
  clientCreditNotesFind (_, args, { connectors, databases }) {
    return connectors.clientCreditNote.find({ args, databases });
  },

  clientCreditNoteFindById (_, args, { connectors, databases }) {
    return connectors.clientCreditNote.findById({ args, databases });
  },

  clientCreditNoteFindOne (_, args, { connectors, databases }) {
    return connectors.clientCreditNote.findOne({ args, databases });
  }
};


export const ClientCreditNote = {
  billingAdderss (query, args, { connectors, databases }) {
    return billingAdderss(query, connectors.address);
  },

  client (query, args, { connectors, databases }) {
    return client(query, connectors.user);
  },

  clientInvoices (query, args, { connectors, databases }) {
    return clientInvoices(query, connectors.clientInvoice);
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
