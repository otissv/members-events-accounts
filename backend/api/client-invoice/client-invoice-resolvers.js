export default {
  clientInvoicesFind (_, args, context) {
    return context.connectors.clientInvoice.find(args);
  },

  clientInvoiceFindById (_, args, context) {
    return context.connectors.clientInvoice.findById(args);
  },

  clientInvoiceFindOne (_, args, context) {
    return context.connectors.clientInvoice.findOne(args);
  }
};


export const ClientInvoice = {
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
