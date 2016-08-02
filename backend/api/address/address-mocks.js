import gateKeeper from '../gateKeeper';

import {
  ADDRESS_FIND,
  ADDRESS_FIND_BY_ID,
  ADDRESS_FIND_ONE,
} from '../constants.js';


export const addressesMock = [
  {
    '_id': '57509b5f350a10fb44e4c2b5',
    'address1': '5529 Keira Shore',
    'address2': 'Apt. 592',
    'city': 'Blandashire',
    'current': true,
    'state': 'South Carolina',
    'country': 'Virgin Islands, British',
    'postCode': '81036-8340',
    'rooms': '101',
    'status': 'active',
    'createdBy': '563fb531007093486f3052ac',
    'updatedBy': '563fb531007093486f3052ac'
  },
  {
    '_id': '57509b5f350a10fb44e4c2b7',
    'address1': '3843 Kody Parks',
    'address2': 'Apt. 408',
    'city': 'South Lauriane',
    'current': null,
    'state': 'Louisiana',
    'country': 'Barbados',
    'postCode': '91845',
    'rooms': '202',
    'status': 'active',
    'createdBy': '563fa9dd007093486f3052a5',
    'updatedBy': '563fa9dd007093486f3052a5'
  }
];

export default class AddressMock {
  find (query) {
    if (gateKeeper(null, ADDRESS_FIND)) {
      if (Array.isArray(query)) return addressesMock.find(a => query.find(q => q._id === a._id));
      if (query._id) return addressesMock.filter(item => item._id === query._id)[0];
      return addressesMock;
    }
    return {
      error: 'access denied'
    };
  }

  findById (query) {
    return addressesMock.filter(item => item._id === query._id)[0];
  }

  findOne () {
    return addressesMock[0];
  }
}
