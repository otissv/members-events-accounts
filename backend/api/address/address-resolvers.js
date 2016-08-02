export default {
  addressesFind (_, args, context) {
    return context.connectors.address.find(args);
  },

  addressFindById (_, args, context) {
    return context.connectors.address.findById(args);
  },

  addressFindOne (_, args, context) {
    return context.connectors.address.findOne(args);
  }
};


export const Address = {
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
