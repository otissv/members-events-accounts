export default {
  cashSaleFindOne (_, args, context) {
    return context.connectors.cashSale.findOne();
  },

  cashSalesFind (_, args, context) {
    return context.connectors.cashSale.find();
  }
};
