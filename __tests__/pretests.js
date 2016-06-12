import mongo from './helpers/mongodb-test-helpers';
import redis from './helpers/redis-test-helpers';
import env from '../backend/env/development-env';
import {
  users,
  events,
  categories
} from './seed/insert-seed';


export const DURATION = 1500;

export function pretest () {
  const MONGO_URI = env.mongodb.uri;

  redis.reset();

  mongo.reset({
    duration: DURATION,
    db      : mongo.connect(MONGO_URI),
    drop    : [
      'users',
      'events',
      'categories'
    ],
    seed: {
      users     : 3,
      events    : 3,
      categories: 3
    },
    insert:[
      {
        collection: 'users',
        data      : users
      }, {
        collection: 'events',
        data      : events
      }, {
        collection: 'categories',
        data      : categories
      }
    ]
  });
};
