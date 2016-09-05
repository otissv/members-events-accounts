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
} from '../context.js';


export const clientInvoiceQueries = {
  clientInvoicesFind (_, args, context) {
    return context.connectors.clientInvoice.find(args);
  },

  clientInvoiceFindById (_, args, context) {
    return context.connectors.clientInvoice.findById(args);
  },

  clientInvoiceFindOne (_, args, context) {
    return context.connectors.clientInvoice.findOne(args);
  }
};


export const ClientInvoice = {
  billingAdderss (query, args, context) {
    return billingAdderss(query, context.connectors.address);
  },

  client (query, args, context) {
    return client(query, context.connectors.user);
  },

  clientCreditNotes (query, args, context) {
    return clientCreditNotes(query, context.connectors.clientCreditNote);
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
