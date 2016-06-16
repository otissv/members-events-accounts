'use strict';


import env from './env/env';
import middleware from './middleware/index-middleware';
import routes from './routes';

export default function (app, express) {
  env(app);
  middleware(app, express);
  routes(app);
};
