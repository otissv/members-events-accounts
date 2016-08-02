import faker from 'faker';
import objectId from 'bson-objectid';

// const {
//   street,
//   secondary,
//   city,
//   state,
//   country,
//   zipCode
// } = faker.;


export const eventMock = [

];


export default class EventMock {
  find (query) {
    if (Array.isArray(query)) return eventMock.find(a => query.find(q => q._id === a._id));
    if (query._id) return eventMock.filter(item => item._id === query._id)[0];
    return eventMock;
  }

  findById (query) {
    return eventMock.filter(item => item._id === query._id)[0];
  }

  findOne () {
    return eventMock[0];
  }
}
