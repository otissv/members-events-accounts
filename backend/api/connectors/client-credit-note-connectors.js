import mongodb from 'mongodb';

const client = mongodb.MongoClient.connect('mongodb://127.0.0.1:27017/test');

export default class ClientCreditnote {

  findOne () {
    return client.then(db => {
      return db.collection('client.credit.note').findOne()
        .then((docs) => docs)
        .catch((err) => err.stack);
    });
  }

  find (query = {}, options = {}) {
    return client.then(db => {
      return new Promise((resolve, reject) => {
        return db.collection('client.credit.note').find()
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

