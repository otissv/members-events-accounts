import faker from 'faker'
import objectId from 'bson-objectid';


const { uuid } = faker.random;
const { 
	account,
	accountName 
} = faker.finance;


export default class LedgerAccountMock {

  findOne () {
	  return { 
	  	_id        : objectId(),
		  name       : accountName(),
		  description: `This is a ${accountName()}`,
		  status     : 'active'
		};
  }
  

  find (query = {}, options = {}) {
    return [
	    { 
		  	_id        : objectId(),
			  name       : accountName(),
			  description: `This is a ${accountName()}`,
			  status     : 'active'
			},
			{ 
		  	_id        : objectId(),
			  name       : accountName(),
			  description: `This is a ${accountName()}`,
			  status     : 'active'
			}
		];
  }
}