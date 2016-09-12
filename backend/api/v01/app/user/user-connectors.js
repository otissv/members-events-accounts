import { objectId, queryObjectId } from '../../../../helpers/objectId-helpers';


const projection = {};


export default class User {
  create (args = {}) {
    console.log(args);
  }

  find ({ args, databases }) {
    const { mongodb }  = databases;
    return mongodb.then(db => {
      return new Promise((resolve, reject) => {
        return db.collection('users').find(queryObjectId(args), projection)
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
    const { mongodb } = databases;

    if (!args._id) {
      return {
        errrors: { message: 'No User id provieded' } };
    };


    return mongodb.then(db => {
      return db.collection('users').findOne(queryObjectId(args), projection)
        .then((doc) => doc)
        .catch((err) => err.stack);
    });
  }

  findOne ({ args, databases, locals }) {
    const { mongodb } = databases;

    return mongodb.then(db => {
      return db.collection('users').findOne(queryObjectId(args), projection)
        .then((doc) => doc)
        .catch((err) => err.stack);
    });
  }
}
