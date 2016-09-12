import { objectId } from '../../../../helpers/objectId-helpers';


const projection = {};


function query (args) {
  return args._id ? { ...args, _id: objectId(args._id) } : args;
}


export default class Note {
  find ({ args, databases }) {
    const { mongodb }  = databases;

    return client.then(db => {
      return new Promise((resolve, reject) => {
        return db.collection('notes').find(query(args), projection)
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

    return client.then(db => {
      return db.collection('notes').findOne(query(args), projection)
        .then((doc) => doc)
        .catch((err) => err.stack);
    });
  }

  findOne ({ args, databases }) {
    const { mongodb }  = databases;

    return client.then(db => {
      return db.collection('notes').findOne(query(args), projection)
        .then((doc) => doc)
        .catch((err) => err.stack);
    });
  }
}
