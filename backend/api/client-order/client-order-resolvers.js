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
} from '../context.js';


export const clientOrderQueries = {
  clientOrdersFind (_, args, context) {
    return context.connectors.clientOrder.find(args);
  },

  clientOrderFindById (_, args, context) {
    return context.connectors.clientOrder.findById(args);
  },

  clientOrderFindOne (_, args, context) {
    return context.connectors.clientOrder.findOne(args);
  }
};


export const ClientOrder = {
  billingAdderss (query, args, context) {
    return billingAdderss(query, context.connectors.address);
  },

  client (query, args, context) {
    return client(query, context.connectors.user);
  },

  clientCreditNotes (query, args, context) {
    return clientCreditNotes(query, context.connectors.clientCreditNote);
  },

  clientInvoices (query, args, context) {
    return clientInvoices(query, context.connectors.clientInvoice);
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
