export default {
  clientCreditNotesFind (_, args, context) {
    return context.connectors.clientCreditNote.find(args);
  },

  clientCreditNoteFindById (_, args, context) {
    return context.connectors.clientCreditNote.findById(args);
  },

  clientCreditNoteFindOne (_, args, context) {
    return context.connectors.clientCreditNote.findOne(args);
  }
};


export const ClientCreditNote = {
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
