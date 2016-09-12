import { objectId, queryObjectId } from '../../../../helpers/objectId-helpers';


const projection = {};


export default class ClientOrder {
  find (args = {}) {
    const { mongodb }  = databases;

    return mongodb.then(db => {
      return new Promise((resolve, reject) => {
        return db.collection('mongodb.orders').find(queryObjectId(args), projection)
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
    const { mongodb }  = databases;

    return mongodb.then(db => {
      return db.collection('mongodb.orders').findOne(queryObjectId(args), projection)
        .then((doc) => doc)
        .catch((err) => err.stack);
    });
  }

  findOne (args = {}) {
    const { mongodb }  = databases;

    return mongodb.then(db => {
      return db.collection('mongodb.orders').findOne(queryObjectId(args), projection)
        .then((doc) => doc)
        .catch((err) => err.stack);
    });
  }
}
