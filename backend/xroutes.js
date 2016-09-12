/*
* Application routes
*/

'use strict';

import { apolloServer } from 'apollo-server';
import bodyParser from 'body-parser';
import schema from './api/v01/app/schemas';
import resolvers from './api/v01/app/resolvers';
import connectors from './api/v01/app/connectors';

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

export default function routes (app, context) {
  app.route('/').get((req, res) => {
    return res.status(403).send('403 Forbidden');
  });

  app.use('/*', (req, res, next) => {
    // const Authentication = req.query.mock === 'true'
    //   ? connectors(true).authentiaction
    //   : connectors().authentiaction;
    //
    // const args = {
    //   _id      : req.query._id,
    //   token    : req.query.token,
    // }
    //
    // const authentication = new Authentication();
    // const query = {};
    // const { _id, roles } = authentication.authenticate(query)
    //
    // if (!_id) res.json({ error: 'access denied'})
    //
    // req.user = { _id, roles  };

    next();
  });

  app.use('/graphql', (req, res, next) => {
    req.query = { ...req.query, ...req.body };

    next();
  });

  app.use('/graphql', apolloServer(req => {
    const mock = req.query.mock === 'true' ? true : false;

    return apolloConfig ({ context, mock, req,  })
  }));

  // admin only route
  app.use('/graphiql', apolloServer(req => {
    const mock = req.query.mock === 'true' ? true : false;
    const graphiql = true;

    return {
      ...apolloConfig ({ context, mock, req }),
      graphiql
    }
  }));
}
