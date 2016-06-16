export default {
  supplierCreditNoteFindOne (_, args, context) {
    return context.connectors.clientCreditNote.findOne();
  },

  supplierCreditNotesFind (_, args, context) {
    return context.connectors.clientCreditNote.find();
  }
};