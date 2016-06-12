/*
* Seed helper
*/

'use strict';

import fakeSeed from './../seed/fake-seed.js';
import moment from 'moment';


export function randNumber (min, max, interval) {
  if (typeof interval === 'undefined') interval = 1;
  var r = Math.floor(Math.random() * (max - min + interval) / interval);
  return r * interval + min;
}


export function randomDate (start, end) {
  return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}


export function getDates () {
  // const startDate = randomDate(new Date(2016, 0, 1), new Date(2016, 11, 31));
  //3 const endDate = () => new Date(2016, 11, startDate.getDate() + 5);#

  const date = new Date();

  const startDate = moment({ 
    years  : date.getFullYear(),
    months : date.getMonth(), 
    date   : randNumber(1, 28),
    hours  : randNumber(0, 23), 
    minutes: randNumber(1, 59),
  });

  const endDate = moment({ 
    years  : startDate.year(),
    months : startDate.month(), 
    date   : randNumber(1, 28),
    hours  : randNumber(0, 23), 
    minutes: randNumber(1, 59),
  });

  return {
    startDate: new Date(startDate.format()),
    endDate: new Date(endDate.format())
  };
}


export default function createSeed (collection, count) {
  let documents = [];

  for (var i = 0; i < count; i++) {
    documents.push(fakeSeed()[collection]);
  }

  return documents;
};