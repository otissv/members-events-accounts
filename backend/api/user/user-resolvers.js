export default {
  usersFind (_, args, context) {
    return context.connectors.user.find(args);
  },

  userFindById (_, args, context) {
    return context.connectors.user.findById(args);
  },

  userFindOne (_, args, context) {
    return context.connectors.user.findOne(args);
  }
};

export const User = {
  addresses (addresses, args, context) {
    return context.connectors.addresses.find(addresses);
  },

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
