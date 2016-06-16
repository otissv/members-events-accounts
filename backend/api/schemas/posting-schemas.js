
export default `
type Posting {
  _id        		 : String,
  categoryId     : String
  credit     		 : String,
  currencyId 		 : String,
  debit      		 : String,
  discount       : String,
  description		 : String,
  ledgerAccountId: String,
  notesIds  		 : String, 
  reference      : String,
  transactionType: String
}
`;


export const postingQueries = `
	postingsFind(_id: String, name: String): [Posting]
  postingFindOne(_id: String, name: String): Posting
`;