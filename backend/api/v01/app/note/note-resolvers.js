import {
  createdBy,
  updatedBy
} from '../app-context.js';

export const noteQueries = {
  notesFind (_, args, { connectors, databases }) {
    console.log({ args, databases });
    return connectors.note.find({ args, databases });
  },

  noteFindById (_, args, { connectors, databases }) {
    return connectors.note.findById({ args, databases });
  },

  noteFindOne (_, args, { connectors, databases }) {
    return connectors.note.findOne({ args, databases });
  }
};


export const Note = {
  createdBy (query, args, { connectors, databases }) {
    return createdBy(query, connectors.user);
  },

  updatedBy (query, args, { connectors, databases }) {
    return updatedBy(query, connectors.user);
  }
};
