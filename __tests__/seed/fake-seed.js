'use strict';

import faker from 'faker';
import objectID from 'bson-objectid';
import { generateHash } from '../../backend/helpers/bycrypt-helper';
import { colors } from '../../backend/api/v01/models/category-model-v01';
import { getDates, randNumber } from '../helpers/seed-helpers';


export function address () {
  return {
    address1: faker.address.streetAddress(),
    address2: faker.address.secondaryAddress(),
    city    : faker.address.city(),
    state   : faker.address.state(),
    country : faker.address.country(),
    postCode: faker.address.zipCode(),
    room    : `${randNumber(1, 300)}`
  };
};


export function clinet (ids) {
  if (Array.isArray(ids)) {
    return ids.map(id => {
      return {
        client : objectID(id),
        attended: faker.random.boolean()
      };
    });
  } else {
    return {
      client : objectID(),
      attended: faker.random.boolean()
    };
  }
}

const categories = ['salsa', 'kizomba', 'Bachata'];


export default function schema () {
  return {
    users: {
      address   : address(),
      email     : faker.internet.email(),
      firstName : faker.name.firstName(),
      lastName  : faker.name.lastName(),
      lastLogin : faker.date.past(),
      updated   : new Date(),
      password  : generateHash(faker.internet.password()),
      roles     : ['receptionist'],
      telephone : faker.phone.phoneNumber(),
      username  : faker.internet.userName()
    },
    events: {
      allDay     : faker.random.boolean(),
      address    : address(),
      invited    : clinet(3),
      category   : objectID('57509b5f350a10fb44e4c2b5'),
      created    : faker.date.past(),
      description: faker.lorem.sentence(),
      end        : getDates().endDate,
      start      : getDates().startDate,
      title      : faker.random.words(),
      updated    : new Date()
    },
    categories: {
      color: [Object.keys(colors).map(k => k)[randNumber(0, 18)]],
      status: faker.random.boolean() ? 'active' : 'deactivated',
      title: categories[randNumber(1, 3)]
    }
  };
}
