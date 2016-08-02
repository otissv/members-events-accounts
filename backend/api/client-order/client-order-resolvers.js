export default {
  clientOrdersFind (_, args, context) {
    return context.connectors.clientOrder.find(args);
  },

  clientOrderFindById (_, args, context) {
    return context.connectors.clientOrder.findById(args);
  },

  clientOrderFindOne (_, args, context) {
    return context.connectors.clientOrder.findOne(args);
  }
};


export const ClientOrder = {
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
