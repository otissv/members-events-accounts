import { objectId, queryObjectId } from '../../../../helpers/objectId-helpers';


const projection = {};


export default class ClientCreditnote {
  find ({ args, databases }) {
    const { mongodb }  = databases;

    return mongodb.then(db => {
      return new Promise((resolve, reject) => {
        return db.collection('mongodb.credit.notes').find(queryObjectId(args), projection)
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
    const { mongodb }  = databases;

    return mongodb.then(db => {
      return db.collection('mongodb.credit.notes').findOne(queryObjectId(args), projection)
        .then((doc) => doc)
        .catch((err) => err.stack);
    });
  }

  findOne ({ args, databases }) {
    const { mongodb }  = databases;

    return mongodb.then(db => {
      return db.collection('mongodb.credit.notes').findOne(queryObjectId(args), projection)
        .then((doc) => doc)
        .catch((err) => err.stack);
    });
  }
}
