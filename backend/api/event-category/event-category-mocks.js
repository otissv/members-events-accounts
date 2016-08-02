import faker from 'faker';
import objectId from 'bson-objectid';


export const eventCategoriesMock = [

];

export default class EventCategoryMock {
  find (query) {
    if (Array.isArray(query)) return eventCategoriesMock.find(a => query.find(q => q._id === a._id));
    if (query._id) return eventCategoriesMock.filter(item => item._id === query._id)[0];
    return eventCategoriesMock;
  }

  findById (query) {
    return eventCategoriesMock.filter(item => item._id === query._id)[0];
  }

  findOne () {
    return eventCategoriesMock[0];
  }
}
