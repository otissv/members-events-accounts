import isSchema from 'is-schema-valid';

export const address = {
  _id       : 'string',
  address1  : 'string',
  address2  : 'string',
  city      : 'string',
  country   : 'string',
  created   : 'string',
  createdBy : 'string',
  current   : 'boolean',
  notes     : ['string'],
  postCode  : 'string',
  rooms     : 'string',
  state     : 'string',
  status    : 'string',
  updated   : 'string',
  updatedBy : 'string'
};

export default isSchema(address);
