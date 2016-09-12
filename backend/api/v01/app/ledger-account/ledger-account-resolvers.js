import {
  createdBy,
  notes,
  updatedBy
} from '../app-context.js';


export const ledgerAccountQueries = {
  ledgerAccountsFind (_, args, { connectors, databases }) {
    return connectors.ledgerAccount.find({ args, databases });
  },

  ledgerAccountFindById (_, args, { connectors, databases }) {
    return connectors.ledgerAccount.findById({ args, databases });
  },

  ledgerAccountFindOne (_, args, { connectors, databases }) {
    return connectors.ledgerAccount.findOne({ args, databases });
  }
};


export const LedgerAccount = {
  createdBy (query, args, { connectors, databases }) {
    return createdBy(query, connectors.user);
  },

  notes (query, args, { connectors, databases }) {
    return notes(query, connectors.note);
  },

  updatedBy (query, args, { connectors, databases }) {
    return updatedBy(query, connectors.user);
  }
};
