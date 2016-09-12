import mongodb from 'mongodb';
import { isObjectEmpty } from './object-helpers';


const {
  ObjectId,
  isValid
} = mongodb;


export function objectId (id) {
  return ObjectId(id);
}

export function isObjectIdValid (id) {
  return isValid(id);
}


export  function queryObjectId (args) {
  if (isObjectEmpty(args)) return {};

  return args._id ? { ...args, _id: objectId(args._id) } : args;
}
