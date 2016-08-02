export default {
  supplierInvoicesFind (_, args, context) {
    return context.connectors.supplierInvoice.find(args);
  },

  supplierInvoiceFindById (_, args, context) {
    return context.connectors.supplierInvoice.findById(args);
  },

  supplierInvoiceFindOne (_, args, context) {
    return context.connectors.supplierInvoice.findOne(args);
  }
};


export const SupplierInvoice = {
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
