import mongodb from 'mongodb';

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
