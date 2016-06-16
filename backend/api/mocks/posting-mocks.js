import faker from 'faker'
import objectId from 'bson-objectid';


const { uuid } = faker.random;
const { 
	account,
	accountName,
	amount,
	transactionType
} = faker.finance;


export default class PostingMock {

  findOne () {
	  return { 
  	  _id        		 : objectId(),
		  debit     		 : amount,
		  categoryId     : objectId(),
		  currencyId 		 : objectId(),
		  description		 : null,
		  ledgerAccountId: objectId(),
		  reference      : null,
	    transactionType: transactionType()
		};
  }
  

  find (query = {}, options = {}) {
    return [
	    { 
	  	  _id        		 : objectId(),
			  debit     		 : amount,
			  categoryId     : objectId(),
			  currencyId 		 : objectId(),
			  description		 : null,
			  ledgerAccountId: objectId(),
			  reference      : null,
		    transactionType: transactionType()
		},{ 
	  	  _id        		 : objectId(),
			  debit     		 : amount,
			  categoryId     : objectId(),
			  currencyId 		 : objectId(),
			  description		 : null,
			  ledgerAccountId: objectId(),
			  reference      : null,
		    transactionType: transactionType()
		}
		];
  }
}