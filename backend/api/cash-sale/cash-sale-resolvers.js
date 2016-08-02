export default {
  cashSalesFind (_, args, context) {
    return context.connectors.cashSale.find(args);
  },

  cashSaleFindById (_, args, context) {
    return context.connectors.cashSale.findById(args);
  },

  cashSaleFindOne (_, args, context) {
    return context.connectors.cashSale.findOne(args);
  }
};


export const CashSale = {
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
