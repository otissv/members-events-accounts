/*
* All enviorments config
*/

'use strict';

import secret from '../../secret';


export default {
  title      : 'Express-es6',
  description: 'Express server with MongoDB',
  keywords   : 'MongoDB, Express, Node.js',
  port       : process.env.PORT || 5002,
  session    : secret
};
