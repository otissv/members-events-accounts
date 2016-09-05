/*
* Application routes
*/

'use strict';

import { apolloServer } from 'apollo-server';
import bodyParser from 'body-parser';
import schema from './api/schemas';
import resolvers from './api/resolvers';
import connectors from './api/connectors';


export default function routes (app) {
  app.route('/').get((req, res) => {
    return res.status(403).send('403 Forbidden');
  });

  app.use('/*', (req, res, next) => {
    const Authentication = req.query.mock === 'true'
      ? connectors(true).authentiaction
      : connectors().authentiaction;

    const args = {
      _id      : req.query._id,
      token    : req.query.token,
    }

    const authentication = new Authentication();
    const query = {};
    const { _id, roles } = authentication.authenticate(query)

    if (!_id) res.json({ error: 'access denied'})

    req.user = { _id, roles  };


    next();
  });

  app.use('/graphql', apolloServer(req => {
    const mock = req.query.mock === 'true' ? true : false;

    return {
      graphiql: true,
      schema: schema,
      resolvers: resolvers,
      connectors: connectors(mock),
      context: {
        req
      }
    }
  }));

  app.use('/graphiql', apolloServer(req => {
    const mock = req.query.mock === 'true' ? true : false;

    return {
      graphiql: true,
      schema: schema,
      resolvers: resolvers,
      connectors: connectors(mock)
    }
  }));
}
