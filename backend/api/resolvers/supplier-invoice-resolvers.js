export default {
  supplierInvoiceFindOne (_, args, context) {
    return context.connectors.supplierInvoice.findOne();
  },

  supplierInvoicesFind (_, args, context) {
    return context.connectors.supplierInvoice.find();
  }
};