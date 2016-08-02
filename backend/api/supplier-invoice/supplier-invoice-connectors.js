import mongodb from 'mongodb';
import objectId from 'bson-objectid';

const client = mongodb.MongoClient.connect('mongodb://127.0.0.1:27017/test');
const projection = {};


function query (args) {
  return args._id ? { ...args, _id: objectId(args._id) } : args;
}


export default class SupplierInvoice {
  find (args = {}) {
    return client.then(db => {
      return new Promise((resolve, reject) => {
        return db.collection('supplier.invoices').find(query(args), projection)
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
      return db.collection('supplier.invoices').findOne(query(args), projection)
        .then((doc) => doc)
        .catch((err) => err.stack);
    });
  }

  findOne (args = {}) {
    return client.then(db => {
      return db.collection('supplier.invoices').findOne(query(args), projection)
        .then((doc) => doc)
        .catch((err) => err.stack);
    });
  }
}
