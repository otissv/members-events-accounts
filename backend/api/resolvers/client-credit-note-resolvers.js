export default {
  clientCreditNoteFindOne (_, args, context) {
    return context.connectors.clientCreditNote.findOne();
  },

  clientCreditNotesFind (_, args, context) {
    return context.connectors.clientCreditNote.find();
  }
};
