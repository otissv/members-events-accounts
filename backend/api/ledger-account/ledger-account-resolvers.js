export default {
  ledgerAccountsFind (_, args, context) {
    return context.connectors.ledgerAccount.find(args);
  },

  ledgerAccountFindById (_, args, context) {
    return context.connectors.ledgerAccount.findById(args);
  },

  ledgerAccountFindOne (_, args, context) {
    return context.connectors.ledgerAccount.findOne(args);
  }
};


export const LedgerAccount = {
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
