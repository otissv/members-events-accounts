export default {
  notesFind (_, args, context) {
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
  createdBy (user, args, context) {
    return context.connectors.user.find({ _id: user.createdBy });
  },

  updatedBy (user, args, context) {
    return context.connectors.user.find({_id: user.updatedBy});
  }
};
