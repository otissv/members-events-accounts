export default {
  clientOrderFindOne (_, args, context) {
    return context.connectors.clientOrder.findOne();
  },

  clientOrdersFind (_, args, context) {
    return context.connectors.clientOrder.find();
  }
};