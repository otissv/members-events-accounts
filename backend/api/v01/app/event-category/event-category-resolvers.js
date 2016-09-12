import {
  notes,
  students,
  updatedBy
} from '../app-context.js';

export const eventCategoryQueries = {
  eventCategoriesFind (_, args, { connectors, databases }) {
    return connectors.eventCategory.find({ args, databases });
  },

  eventCategoryFindById (_, args, { connectors, databases }) {
    return connectors.eventCategory.findById({ args, databases });
  },

  eventCategoryFindOne (_, args, { connectors, databases }) {
    return connectors.eventCategory.findOne({ args, databases });
  }
};


export const EventCategory = {
  createdBy (query, args, { connectors, databases }) {
    return createdBy(query, connectors.user);
  },

  notes (query, args, { connectors, databases }) {
    return notes(query, connectors.note);
  },

  students (query, context) {
    return connectors.note.find(students);
  },

  updatedBy (query, args, { connectors, databases }) {
    return updatedBy(query, connectors.user);
  }
};
