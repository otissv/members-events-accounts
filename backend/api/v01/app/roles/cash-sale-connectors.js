import mongodb from 'mongodb';
import { objectId } from '../../helpers/objectId-helpers';

const client = mongodb.MongoClient.connect('mongodb://127.0.0.1:27017/test');
const projection = {};


function query (args) {
  return args._id ? { ...args, _id: objectId(args._id) } : args;
}


export default class CashSale {
  find (args = {}) {
    return client.then(db => {
      return new Promise((resolve, reject) => {
        return db.collection('cash.sale').find(query(args), projection)
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
    return client.then(db => {
      return db.collection('cash.sales').findOne(query(args), projection)
        .then((doc) => doc)
        .catch((err) => err.stack);
    });
  }

  findOne (args = {}) {
    return client.then(db => {
      return db.collection('cash.sales').findOne(query(args), projection)
        .then((doc) => doc)
        .catch((err) => err.stack);
    });
  }
}
