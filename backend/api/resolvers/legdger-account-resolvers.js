export default {
  legdgerAccountFindOne (_, args, context) {
    console.log();
    return context.connectors.legdgerAccount.findOne();
  },

  legdgerAccountsFind (_, args, context) {
    return context.connectors.legdgerAccount.find().then(stuff => stuff);
  }
};
