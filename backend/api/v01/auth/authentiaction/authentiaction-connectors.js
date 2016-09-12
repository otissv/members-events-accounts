import { objectId, queryObjectId } from '../../../../helpers/objectId-helpers';
import { isObjectEmpty } from '../../../../helpers/object-helpers.js';
import { generateToken, userTokenKey } from '../../../../helpers/token-helper';
import { authentiactionValidation } from './authentiaction-model';

const projection = {};

function error(message) {
  return new Promise((resolve, reject) => {
    reject(message);
  });
}

export default class Authentiaction {

  authenticate ({ args, databases }) {
    const { mongodb }  = databases;

    return mongodb.then(db => {
      return db.collection('users').findOne(queryObjectId(args), projection)
        .then((doc) => doc)
        .catch((err) => err.stack);
    });
  }


  register ({ args, databases }) {
    const { mongodb, redis }  = databases;

    if (isObjectEmpty(args) || args.username == null || args.password == null) {
      error('Invlaid data');
    }


    return mongodb.then(db => {
      return new Promise((resolve, reject) => {

        return db.collection('users').findOne(queryObjectId(args), projection)
          .then((doc) => {
            // if (!isObjectEmpty(doc)) return reject('user already exists');

            return mongodb.then(db => {
              return db.collection('users').save(queryObjectId(args), projection)
                .then((doc) => {
                  const user = {
                    _id     : doc.ops[0]._id,
                    roles   : doc.ops[0].roles,
                    username: doc.ops[0].username
                  };
                  const token = generateToken(msg => msg)(user);

                  // save token
                  redis.hset(userTokenKey(user._id), 'token', token);

                  return resolve({
                    ...user,
                    token
                  });
                })
                .catch((err) => reject(err.stack));
            });
          })
          .catch((err) => err.stack);
      });

    });
  }

  unauthenticate ({ args, databases }) {
    const { mongodb }  = databases;

    if (isObjectEmpty(args)) return { error };

    return mongodb.then(db => {
      return db.collection('users').save(queryObjectId(args), projection)
        .then((doc) => doc)
        .catch((err) => err.stack);
    });
  }
}
