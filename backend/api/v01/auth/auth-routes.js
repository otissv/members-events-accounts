/*
* Application routes
*/

'use strict';

import { apolloServer } from 'apollo-server';
import bodyParser from 'body-parser';
import schema from './schemas';
import resolvers from './resolvers';
import connectors from './connectors';


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


export default function authRoutes (app, context) {
  app.use('/v01/auth', (req, res, next) => {
    req.query = { ...req.query, ...req.body };

    next();
  });

  app.use('/v01/auth', apolloServer(req => {
    const mock = req.query.mock === 'true' ? true : false;

    return apolloConfig ({ context, mock, req,  })
  }));

  // admin only route
  app.use('/v01/authiql', apolloServer(req => {
    const mock = req.query.mock === 'true' ? true : false;
    const graphiql = true;

    return {
      ...apolloConfig ({ context, mock, req }),
      graphiql
    }
  }));
}
