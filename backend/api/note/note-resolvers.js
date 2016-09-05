import {
  createdBy,
  updatedBy
} from '../context.js';

export const noteQueries = {
  notesFind (_, args, context) {
    console.log(args);
    return context.connectors.note.find(args);
  },

  noteFindById (_, args, context) {
    return context.connectors.note.findById(args);
  },

  noteFindOne (_, args, context) {
    return context.connectors.note.findOne(args);
  }
};


export const Note = {
  createdBy (query, args, context) {
    return createdBy(query, context.connectors.user);
  },

  updatedBy (query, args, context) {
    return updatedBy(query, context.connectors.user);
  }
};
