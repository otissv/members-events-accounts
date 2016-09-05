import {
  client,
  createdBy,
  notes,
  posting,
  updatedBy
} from '../context.js';

export const cashSaleQueries = {
  cashSalesFind (_, args, context) {
    return context.connectors.cashSale.find(args);
  },

  cashSaleFindById (_, args, context) {
    return context.connectors.cashSale.findById(args);
  },

  cashSaleFindOne (_, args, context) {
    return context.connectors.cashSale.findOne(args);
  }
};


export const CashSale = {
  client (query, args, context) {
    return client(query, context.connectors.user);
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

  updatedBy (query, args, context) {
    return updatedBy(query, context.connectors.user);
  }
};
