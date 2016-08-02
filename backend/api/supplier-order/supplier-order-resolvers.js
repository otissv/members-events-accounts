export default {
  supplierOrdersFind (_, args, context) {
    return context.connectors.supplierOrder.find(args);
  },

  supplierOrderFindById (_, args, context) {
    return context.connectors.supplierOrder.findById(args);
  },

  supplierOrderFindOne (_, args, context) {
    return context.connectors.supplierOrder.findOne(args);
  }
};


export const SupplierOrder = {
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
