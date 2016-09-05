import {
  createdBy,
  ledgerAccount,
  notes,
  updatedBy
} from '../context.js';

export const postingQueries = {
  postingsFind (_, args, context) {
    return context.connectors.posting.find(args);
  },

  postingFindById (_, args, context) {
    return context.connectors.posting.findById(args);
  },

  postingFindOne (_, args, context) {
    return context.connectors.posting.findOne(args);
  }
};


export const Posting = {
  createdBy (query, args, context) {
    return createdBy(query, context.connectors.user);
  },

  ledgerAccount (query, args, context) {
    return ledgerAccount(query, context.connectors.ledgerAccount);
  },

  notes (query, args, context) {
    return notes(query, context.connectors.note);
  },

  updatedBy (query, args, context) {
    return updatedBy(query, context.connectors.user);
  }
};
