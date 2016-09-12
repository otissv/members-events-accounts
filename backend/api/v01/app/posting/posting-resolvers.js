import {
  createdBy,
  ledgerAccount,
  notes,
  updatedBy
} from '../app-context.js';

export const postingQueries = {
  postingsFind (_, args, { connectors, databases }) {
    return connectors.posting.find({ args, databases });
  },

  postingFindById (_, args, { connectors, databases }) {
    return connectors.posting.findById({ args, databases });
  },

  postingFindOne (_, args, { connectors, databases }) {
    return connectors.posting.findOne({ args, databases });
  }
};


export const Posting = {
  createdBy (query, args, { connectors, databases }) {
    return createdBy(query, connectors.user);
  },

  ledgerAccount (query, args, { connectors, databases }) {
    return ledgerAccount(query, connectors.ledgerAccount);
  },

  notes (query, args, { connectors, databases }) {
    return notes(query, connectors.note);
  },

  updatedBy (query, args, { connectors, databases }) {
    return updatedBy(query, connectors.user);
  }
};
