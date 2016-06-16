export default {
  postingFindOne (_, args, context) {
    return context.connectors.posting.findOne();
  },

  postingsFind (_, args, context) {
    return context.connectors.posting.find();
  }
};
