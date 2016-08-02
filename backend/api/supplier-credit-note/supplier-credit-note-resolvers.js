export default {
  supplierCreditNotesFind (_, args, context) {
    return context.connectors.supplierCreditNote.find(args);
  },

  supplierCreditNoteFindById (_, args, context) {
    return context.connectors.supplierCreditNote.findById(args);
  },

  supplierCreditNoteFindOne (_, args, context) {
    return context.connectors.supplierCreditNote.findOne(args);
  }
};


export const SupplierCreditNote = {
  notes (notes, args, context) {
    return context.connectors.note.find(notes);
  },

  createdBy (user, args, context) {
    return context.connectors.user.find(user);
  },

  updatedBy (user, args, context) {
    return context.connectors.user.find(user);
  }
};
