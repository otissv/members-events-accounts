/*
* MongoDB connection
*/


import mongodb from 'mongodb';
const MongoClient = mongodb.MongoClient;

export default {
  connect (uri) {
    return MongoClient.connect(uri, {native_parser:true});
  }
};
