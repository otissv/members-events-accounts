export default {
  eventFind (_, args, context) {
    return context.connectors.event.find(args);
  },

  eventFindById (_, args, context) {
    return context.connectors.event.findById(args);
  },

  eventFindOne (_, args, context) {
    return context.connectors.event.findOne(args);
  }
};


export const EventCatergory = {
  address (address, args, context) {
    return context.connectors.address.find(address);
  },

  category (category, args, context) {
    return context.connectors.category.find({ _id: category });
  },

  notes (notes, args, context) {
    return context.connectors.note.find(notes);
  },

  createdBy (user, args, context) {
    return context.connectors.user.find({ _id: user.createdBy });
  },

  updatedBy (user, args, context) {
    return context.connectors.user.find({_id: user.updatedBy});
  }
};
