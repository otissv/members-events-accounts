/*
* Drop database collections helpers
*/

'use strict';

import createSeed from './seed-helpers.js';
import mongo from 'mongoskin';
import Promise from 'bluebird';

Promise.promisifyAll(mongo);
let db;


function print (msg) {
  console.log(msg);
}


/*
* Drop database collections
*/
function dropCollections ({ db, drop }) {
  return new Promise((resolve, reject) => {
    if (Array.isArray(drop)) {
      drop.forEach(collection => {
        db.collection(collection).drop();
      });

    } else {
      db.collection(drop).drop();
    }
  });
};


/*
* Insert database collections
*/
function insertDocuments ({ db, collectionName, data }) {
  db.collection(collectionName).insert(data, (err) => {
    if (err) {
      console.log('err');
      print(err);
    }
  });
};


/*
* Reset database collections
*/
function reset ({ db, duration = 100, drop, seed, insert }) {

  // Drop collections
  if (typeof drop !== 'undefined') {
    dropCollections({ db, drop });
  }


  // Insert manual documents into data
  if (typeof insert !== 'undefined') {
    insert.forEach(item => {
      insertDocuments({
        db,
        collectionName: item.collection,
        data: item.data
      });
    });
  }


  // Insert seed documents into data
  if (typeof seed !== 'undefined') {
    Object.keys(seed).forEach(key => {
      const collectionName = key;
      const count = seed[key];

      insertDocuments({
        db,
        collectionName,
        data: createSeed(collectionName, count)
      });
    });
  }

  setTimeout(() => db.close(), duration);

};

export function connect (uri) {
  db = mongo.db(uri, {native_parser:true});
  return db;
};


export function close () {
  setTimeout(() => db.close(), 5000);
};

export default {
  close,
  connect,
  reset
};
