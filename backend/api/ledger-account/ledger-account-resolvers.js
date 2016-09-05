import {
  createdBy,
  notes,
  updatedBy
} from '../context.js';


export const ledgerAccountQueries = {
  ledgerAccountsFind (_, args, context) {
    return context.connectors.ledgerAccount.find(args);
  },

  ledgerAccountFindById (_, args, context) {
    return context.connectors.ledgerAccount.findById(args);
  },

  ledgerAccountFindOne (_, args, context) {
    return context.connectors.ledgerAccount.findOne(args);
  }
};


export const LedgerAccount = {
  createdBy (query, args, context) {
    return createdBy(query, context.connectors.user);
  },

  notes (query, args, context) {
    return notes(query, context.connectors.note);
  },

  updatedBy (query, args, context) {
    return updatedBy(query, context.connectors.user);
  }
};
