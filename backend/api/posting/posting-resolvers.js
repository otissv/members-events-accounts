export default {
  postingsFind (_, args, context) {
    return context.connectors.posting.find(args);
  },

  postingFindById (_, args, context) {
    return context.connectors.posting.findById(args);
  },

  postingFindOne (_, args, context) {
    return context.connectors.posting.findOne(args);
  }
};


export const Posting = {
  notes (notes, args, context) {
    return context.connectors.note.find(notes);
  },

  createdBy (user, args, context) {
    return context.connectors.user.find({ _id: user.createdBy });
  },

  updatedBy (user, args, context) {
    return context.connectors.user.find({_id: user.updatedBy});
  }
};
