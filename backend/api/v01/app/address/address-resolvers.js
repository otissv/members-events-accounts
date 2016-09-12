import {
  createdBy,
  notes,
  updatedBy
} from '../app-context.js';

export const addressQueries = {
  addressesFind (_, args, { connectors, databases }) {
    return connectors.address.find({ args, databases });
  },

  addressFindById (_, args, { connectors, databases }) {
    return connectors.address.findById({ args, databases });
  },

  addressFindOne (_, args, { connectors, databases }) {
    return connectors.address.findOne({ args, databases });
  }
};


export const Address = {
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
