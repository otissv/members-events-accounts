import { objectId, queryObjectId } from '../../../../helpers/objectId-helpers';


const projection = {};


export default class SupplierInvoice {
  find ({ args, databases }) {
    return mongodb.then(db => {
      return new Promise((resolve, reject) => {
        return db.collection('supplier.invoices').find(queryObjectId(args), projection)
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

  findById ({ args, databases }) {
    return mongodb.then(db => {
      const { mongodb }  = databases;

      return db.collection('supplier.invoices').findOne(queryObjectId(args), projection)
        .then((doc) => doc)
        .catch((err) => err.stack);
    });
  }

  findOne ({ args, databases }) {
    return mongodb.then(db => {
      const { mongodb }  = databases;

      return db.collection('supplier.invoices').findOne(queryObjectId(args), projection)
        .then((doc) => doc)
        .catch((err) => err.stack);
    });
  }
}
