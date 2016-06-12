// import mongodb from '../../databases/mongodb';

import mongodb from 'mongodb';

const client = mongodb.MongoClient.connect('mongodb://127.0.0.1:27017/test');

export default class LegdgerAccount {

  findOne () {
    return client.then(db => {
      return db.collection('ledger.accounts').findOne()
        .then((docs) => docs)
        .catch((err) => err.stack);
    });
  }

  find (query = {}, options = {}) {
    return client.then(db => {
      return new Promise((resolve, reject) => {
        return db.collection('ledger.accounts').find()
        .toArray((err, result) => {
          if (err) {
            reject(err);
          } else {
            resolve(result);
          }
        });
      });
    });
  }
}

// import ledgerAccount from '../models/ledger-account-model';
//
// console.log(ledgerAccount);
// export default class LegdgerAccount {
//   findOne () {
//     return ledgerAccount.findOne().then(doc => doc);
//   }
//
//   find () {
//     return ledgerAccount.find().then(docs => docs);
//   }
// }
