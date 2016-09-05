import {
  address,
  createdBy,
  eventCategory,
  instructors,
  notes,
  updatedBy
} from '../context.js';


export const eventQueries = {
  eventFind (_, args, context) {
    return context.connectors.event.find(args);
  },

  eventFindById (_, args, context) {
    return context.connectors.event.findById(args);
  },

  eventFindOne (_, args, context) {
    return context.connectors.event.findOne(args);
  }
};


export const Event = {
  address (query, args, context) {
    return address(query, context.connectors.address);
  },

  category (query, args, context) {
    return eventCategory(query, context.connectors.eventCategory);
  },

  createdBy (query, args, context) {
    return createdBy(query, context.connectors.user);
  },

  instructors (query, args, context) {
    return instructors(query, context.connectors.user);
  },

  notes (query, args, context) {
    return notes(query, context.connectors.note);
  },

  updatedBy (query, args, context) {
    return updatedBy(query, context.connectors.user);
  }
};
