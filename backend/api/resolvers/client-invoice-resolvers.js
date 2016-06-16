export default {
  clientInvoiceFindOne (_, args, context) {
    return context.connectors.clientInvoice.findOne();
  },

  clientInvoicesFind (_, args, context) {
    return context.connectors.clientInvoice.find();
  }
};
