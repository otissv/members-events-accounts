export default {
  ledgerAccountFindOne (_, args, context) {
    return context.connectors.ledgerAccount.findOne();
  },

  ledgerAccountsFind (_, args, context) {
  	return context.connectors.ledgerAccount.find();
    //return context.connectors.ledgerAccount.find().then(stuff => stuff);
  }
};
