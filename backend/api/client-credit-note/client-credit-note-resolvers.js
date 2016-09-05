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
} from '../context.js';


export const clientCreditNoteQueries = {
  clientCreditNotesFind (_, args, context) {
    return context.connectors.clientCreditNote.find(args);
  },

  clientCreditNoteFindById (_, args, context) {
    return context.connectors.clientCreditNote.findById(args);
  },

  clientCreditNoteFindOne (_, args, context) {
    return context.connectors.clientCreditNote.findOne(args);
  }
};


export const ClientCreditNote = {
  billingAdderss (query, args, context) {
    return billingAdderss(query, context.connectors.address);
  },

  client (query, args, context) {
    return client(query, context.connectors.user);
  },

  clientInvoices (query, args, context) {
    return clientInvoices(query, context.connectors.clientInvoice);
  },

  clientOrders (query, args, context) {
    return clientOrders(query, context.connectors.clientOrder);
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

  updatedBy (query, args, context) {
    return updatedBy(query, context.connectors.user);
  }
};
