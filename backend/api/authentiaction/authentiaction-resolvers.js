export const authentiactionQueries = {
  authenticate (_, args, context) {
    return context.connectors.authentiaction.authentiacte(args);
  },

  register (_, args, context) {
    return context.connectors.authentiaction.register(args);
  },

  unauthenticate (_, args, context) {
    return context.connectors.authentiaction.unauthentiacte(args);
  }
};


export const authentiactionMutations = {
  authenticate (_, args, context) {
    return context.connectors.authentiaction.authentiacte(args);
  },

  register (_, args, context) {
    return context.connectors.authentiaction.register(args);
  },

  unauthenticate (_, args, context) {
    return context.connectors.authentiaction.unauthentiacte(args);
  }
};
