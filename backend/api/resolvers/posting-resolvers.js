export default {
  postingFindOne (_, args, context) {
    return context.connectors.posting.findOne();
  },

  postingsFind (_, args, context) {
    console.log(context.connectors.posting.find());
    return context.connectors.posting.find();
  }
};
