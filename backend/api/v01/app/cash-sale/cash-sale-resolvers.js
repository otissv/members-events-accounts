import {
  client,
  createdBy,
  notes,
  posting,
  updatedBy
} from '../app-context.js';

export const cashSaleQueries = {
  cashSalesFind (_, args, { connectors, databases }) {
    return connectors.cashSale.find({ args, databases });
  },

  cashSaleFindById (_, args, { connectors, databases }) {
    return connectors.cashSale.findById({ args, databases });
  },

  cashSaleFindOne (_, args, { connectors, databases }) {
    return connectors.cashSale.findOne({ args, databases });
  }
};


export const CashSale = {
  client (query, args, { connectors, databases }) {
    return client(query, connectors.user);
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

  updatedBy (query, args, { connectors, databases }) {
    return updatedBy(query, connectors.user);
  }
};
