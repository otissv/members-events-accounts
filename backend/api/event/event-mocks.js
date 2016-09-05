import { find, findById, findOne } from '../../helpers/mock-helper';
import faker from 'faker';
import objectId from 'bson-objectid';


export const eventMock = [
  {
    _id        : '57cc3a90670bed7f5d767ed9',
    address    : { _id: '57509b5f350a10fb44e4c2b5' },
    allDay     : true,
    category   : { _id : '57cc372e281460494aab451b'},
    created    : 'Tue Sep 29 2015 15:03:08 GMT+0200 (CEST)',
    createdBy  : { _id: '563fb531007093486f3052ac' },
    description: 'Doloremque adipisci veniam et reprehenderit. Quaerat provident ullam. Qui quas itaque doloribus quis iste saepe quasi sit. A tempora in nihil sint distinctio. Adipisci cumque deleniti et illum. Ut magni minus impedit.',
    end        : 'Sun Sep 04 2016 16:00:00 GMT+0200 (CEST)',
    instructors: [{ _id: '563fa9dd007093486f3052a5' }, { _id: '563fb531007093486f3052ac' }],
    notes      : [{ _id: '563fa9dd007093486f3052n2' }],
    level      : 'beginer',
    start      : 'Sun Sep 04 2016 10:00:00 GMT+0200 (CEST)',
    title      : 'Awseome event',
    updated    : 'Tue Sep 29 2015 15:03:08 GMT+0200 (CEST)',
    updatedBy  : { _id: '563fb531007093486f3052ac' }
  }
];

export default class EventMock {
  find (query) { return find(query, eventMock) }
  findById (query) { return findById(query, eventMock) }
  findOne () { return findOne(eventMock) }
}
