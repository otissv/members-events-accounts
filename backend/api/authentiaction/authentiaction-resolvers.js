export default {
  authentiacte (_, args, context) {
    return context.connectors.authentiaction.authentiacte(args);
  },

  register (_, args, context) {
    return context.connectors.authentiaction.register(args);
  },

  unauthentiacte (_, args, context) {
    return context.connectors.authentiaction.unauthentiacte(args);
  }
};
