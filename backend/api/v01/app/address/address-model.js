import isSchema from 'is-schema-valid';
import {
  isObjectId
} from '../../../../helpers/validation-helpers';


const _id = {
  type: 'string',
  validation: [isObjectId]
};


export const address = {
  _id       : _id,
  address1  : { type: 'string', required: true },
  address2  : 'string',
  city      :  { type: 'string', required: true },
  country   :  { type: 'string', required: true },
  created   : 'string',
  createdBy : _id,
  current   : 'boolean',
  notes     : [_id],
  postCode  :  { type: 'string', required: true },
  rooms     : 'string',
  state     : 'string',
  status    : 'string',
  updated   : 'string',
  updatedBy : _id
};

export default isSchema(address);
