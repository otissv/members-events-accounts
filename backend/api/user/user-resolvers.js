import {
  addresses,
  billingAdderss,
  client,
  createdBy,
  notes,
  posting,
  shippingAddress,
  updatedBy
} from '../context.js';

export const userQueries = {
  usersFind (_, args, context) {
    return context.connectors.user.find(args);
  },

  userFindById (_, args, context) {
    return context.connectors.user.find(args);
  },

  userFindOne (_, args, context) {
    return context.connectors.user.findOne(args);
  }
};


export const userMutations = {
  userCreate (_, args, context) {
    return context.connectors.user.create(args);
  }
};


export const User = {
  addresses (query, args, context) {
    return addresses(query, context.connectors.address);
  },

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
