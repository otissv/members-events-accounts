export default {
  eventCategoriesFind (_, args, context) {
    return context.connectors.eventCategory.find(args);
  },

  eventCategoryFindById (_, args, context) {
    return context.connectors.eventCategory.findById(args);
  },

  eventCategoryFindOne (_, args, context) {
    return context.connectors.eventCategory.findOne(args);
  }
};


export const EventCategory = {
  students (students, args, context) {
    return context.connectors.note.find(students);
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
