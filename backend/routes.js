/*
* Application routes
*/

'use strict';

import { apolloServer } from 'apollo-server';
import schema from './api/schemas';
import resolvers from './api/resolvers';
import connectors from './api/connectors';


export default function routes (app) {
  app.route('/').get((req, res) => {
    return res.status(403).send('403 Forbidden');
  });

  app.use('/graphql', apolloServer({
    graphiql  : true,
    pretty    : true,
    schema    : schema,
    resolvers : resolvers,
    connectors: connectors
  }));
}
