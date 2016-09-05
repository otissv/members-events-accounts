import {
  notes,
  students,
  updatedBy
} from '../context.js';

export const eventCategoryQueries = {
  eventCategoriesFind (_, args, context) {
    return context.connectors.eventCategory.find(args);
  },

  eventCategoryFindById (_, args, context) {
    return context.connectors.eventCategory.findById(args);
  },

  eventCategoryFindOne (_, args, context) {
    return context.connectors.eventCategory.findOne(args);
  }
};


export const EventCategory = {
  createdBy (query, args, context) {
    return createdBy(query, context.connectors.user);
  },

  notes (query, args, context) {
    return notes(query, context.connectors.note);
  },

  students (query, context) {
    return context.connectors.note.find(students);
  },

  updatedBy (query, args, context) {
    return updatedBy(query, context.connectors.user);
  }
};
