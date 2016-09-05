import isSchema from 'is-schema-valid';

export const user = {
  _id       : 'string',
  created   : 'string',
  createdBy : 'string',
  flag      : 'boolean',
  note      : 'string',
  updated   : 'string',
  updatedBy : 'string'
};

export default isSchema(user);
