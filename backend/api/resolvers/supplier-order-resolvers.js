export default {
  supplierOrderFindOne (_, args, context) {
    return context.connectors.supplierOrder.findOne();
  },

  supplierOrdersFind (_, args, context) {
    return context.connectors.supplierOrder.find();
  }
};