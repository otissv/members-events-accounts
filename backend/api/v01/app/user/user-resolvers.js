import {
  addresses,
  billingAdderss,
  client,
  createdBy,
  notes,
  posting,
  shippingAddress,
  updatedBy
} from '../app-context.js';


export const userQueries = {
  usersFind (_, args, { connectors, databases }) {
    return connectors.user.find({ args, databases });
  },

  userFindById (_, args, { connectors, databases }) {
    return context.connectors.user.findById({ args, databases });
  },

  userFindOne (_, args, { connectors, databases }) {
    return connectors.user.findOne({ args, databases });
  }
};


export const userMutations = {
  userCreate (_, args, { connectors, databases }) {
    return context.connectors.user.create({ args, databases });
  }
};


export const User = {
  addresses (query, args, { connectors, databases }) {
    return addresses(query, context.connectors.address);
  },

  createdBy (query, args, { connectors, databases }) {
    return createdBy(query, context.connectors.user);
  },

  notes (query, args, { connectors, databases }) {
    return notes(query, context.connectors.note);
  },

  updatedBy (query, args, { connectors, databases }) {
    return updatedBy(query, context.connectors.user);
  }
};
