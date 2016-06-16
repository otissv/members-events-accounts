import faker from 'faker'
import objectId from 'bson-objectid';


const { uuid } = faker.random;
const { 
	amount,
	account,
	accountName 
} = faker.finance;


export default class CashSaleMock {

  findOne () {
	  return { 
	  	_id        		 : objectId(),
		  amount 		     : amount(),
		  discount       : amount(),
		  postingId      : objectId(),
		  quanity    		 : 100
		};
  }
  

  find (query = {}, options = {}) {
    return [
	    { 
		  	_id        		 : objectId(),
			  amount 		     : amount(),
			  discount       : amount(),
			  postingId      : objectId(),
			  quanity    		 : 100
			},
			{ 
			  	_id        		 : objectId(),
			  amount 		     : amount(),
			  discount       : amount(),
			  postingId      : objectId(),
			  quanity    		 : 100
				}
		];
  }
}