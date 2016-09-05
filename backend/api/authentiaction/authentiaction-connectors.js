import mongodb from 'mongodb';
import { objectId } from '../../helpers/objectId-helpers';
import { isObjectEmpty } from '../../helpers/object-helpers';


const client = mongodb.MongoClient.connect('mongodb://127.0.0.1:27017/test');
const projection = {
  _id      : 1,
  roles    : 1,
  token    : 1
};


function query (args) {
  return args._id ? { ...args, _id: objectId(args._id) } : args;
}


export default class Authentiaction {
  authenticate (args = {}) {
    return client.then(db => {
      return new Promise((resolve, reject) => {
        return db.collection('authentiaction').find(query(args), projection)
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

  register (args) {
    if (isObjectEmpty(args)) return {
      error
     }
    return client.then(db => {
      return db.collection('authentiaction').save(query(args), projection)
        .then((doc) => doc)
        .catch((err) => err.stack);
    });
  }

  unauthenticate (args = {}) {
    return client.then(db => {
      return db.collection('authentiaction').findOne(query(args), projection)
        .then((doc) => doc)
        .catch((err) => err.stack);
    });
  }

}
