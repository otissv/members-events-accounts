import {
  address,
  createdBy,
  eventCategory,
  instructors,
  notes,
  updatedBy
} from '../app-context.js';


export const eventQueries = {
  eventFind (_, args, { connectors, databases }) {
    return connectors.event.find({ args, databases });
  },

  eventFindById (_, args, { connectors, databases }) {
    return connectors.event.findById({ args, databases });
  },

  eventFindOne (_, args, { connectors, databases }) {
    return connectors.event.findOne({ args, databases });
  }
};


export const Event = {
  address (query, args, { connectors, databases }) {
    return address(query, connectors.address);
  },

  category (query, args, { connectors, databases }) {
    return eventCategory(query, connectors.eventCategory);
  },

  createdBy (query, args, { connectors, databases }) {
    return createdBy(query, connectors.user);
  },

  instructors (query, args, { connectors, databases }) {
    return instructors(query, connectors.user);
  },

  notes (query, args, { connectors, databases }) {
    return notes(query, connectors.note);
  },

  updatedBy (query, args, { connectors, databases }) {
    return updatedBy(query, connectors.user);
  }
};
