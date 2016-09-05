import { find, findById, findOne } from '../../helpers/mock-helper';
import faker from 'faker';
import objectId from 'bson-objectid';


export const eventCategoriesMock = [
  {
    _id: '57cc372e281460494aab451b'
  }
];

export default class EventCategoryMock {
  find (query) { return find(query, eventCategoriesMock) }
  findById (query) { return findById(query, eventCategoriesMock) }
  findOne () { return findOne(eventCategoriesMock) }
}
