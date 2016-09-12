/*
* Application routes
*/

'use strict';
import appRoutes from './app/app-routes';
import authRoutes from './auth/auth-routes';

export default function apiV01Routes (app, context)  {
  authRoutes(app, context);
  appRoutes(app, context);
}
