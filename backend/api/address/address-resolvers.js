import {
  createdBy,
  notes,
  updatedBy
} from '../context.js';

export const addressQueries = {
  addressesFind (_, args, context) {
    return context.connectors.address.find(args);
  },

  addressFindById (_, args, context) {
    return context.connectors.address.findById(args);
  },

  addressFindOne (_, args, context) {
    return context.connectors.address.findOne(args);
  }
};


export const Address = {
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
