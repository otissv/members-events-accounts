/*
* Application routes
*/

'use strict';

import { apolloServer } from 'apollo-server';
import bodyParser from 'body-parser';
import schema from './app-schemas';
import resolvers from './app-resolvers';
import connectors from './app-connectors';

function apolloConfig ({ context, mock, req }) {
  return {
    schema: schema,
    resolvers: resolvers,
    connectors: connectors(mock),
    context: {
      req,
      ...context
    }
  }
}

export default  function appRoutes (app, context) {
  app.use('/v01/graphql', (req, res, next) => {
    req.query = { ...req.query, ...req.body };
    next();
  });

  app.use('/v01/graphql', apolloServer(req => {
    const mock = req.query.mock === 'true' ? true : false;

    return apolloConfig ({ context, mock, req,  })
  }));

  // admin only route
  app.use('/v01/graphiql', apolloServer(req => {
    const mock = req.query.mock === 'true' ? true : false;
    const graphiql = true;
    console.log('ql');
    return {
      ...apolloConfig ({ context, mock, req }),
      graphiql
    }
  }));
}
