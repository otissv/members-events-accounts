import mongodb from 'mongodb';
import { objectId } from '../../helpers/objectId-helpers';

import {
  ADDRESS_FIND,
  ADDRESS_FIND_BY_ID,
  ADDRESS_FIND_ONE,
} from '../constants.js';


const client = mongodb.MongoClient.connect('mongodb://127.0.0.1:27017/test');
const projection = {};


function query (args) {
  return args._id ? { ...args, _id: objectId(args._id) } : args;
}


export default class Address {

  find (args = {}) {
    console.log('addr find connector');
    return client.then(db => {
      return new Promise((resolve, reject) => {
        return db.collection('addresses').find(query(args), projection)
        .toArray((err, docs) => {
          if (err) {
            reject(err);
          } else {
            resolve(docs);
          }
        });
      });
    });
  }

  findById (args = {}) {
    console.log('addr findById connector');
    return client.then(db => {
      return db.collection('addresses').findOne(query(args), projection)
        .then((doc) => doc)
        .catch((err) => err.stack);
    });
  }

  findOne (args = {}) {
    console.log('addr findOne connector');
    return client.then(db => {
      return db.collection('addresses').findOne(query(args), projection)
        .then((doc) => doc)
        .catch((err) => err.stack);
    });
  }
}
