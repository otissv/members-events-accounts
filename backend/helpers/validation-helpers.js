import isemail from 'isemail'
import libphonenumber from 'libphonenumber-node';
import { isObjectIdValid } from './objectId-helpers.js';


export const isEmail = (value) => {
  if (isemail.validate(value)) {
    return { error: `Email validation Error: ${value} is not a valid email address` };
  }

  return value;
};

export const isObjectId = (value) => {
  if (isObjectIdValid(value)) {
    return { error: `ObjectID validation Error: ${value} is not a valid mongodb id` };
  }

  return value;
};

export const isPhoneNumber = (value) => {
  if (libphonenumber.isValid(value)) {
    return { error: `Phone number validation Error: ${value} is not a valid phone number` };
  }

  return value;
};
