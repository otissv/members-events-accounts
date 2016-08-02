
export default `
type Posting {
  _id 		       : String,
  categoryId     : String
  created        : String,
  createdBy      : User,
  credit 		     : String,
  currencyId 		 : String,
  debit 		     : String,
  description		 : String,
  discount       : String,
  ledgerAccountId: String,
  notes          : [Note],
  reference      : String,
  transactionType: String,
  updated        : String,
  updatedBy      : User
}
`;


export const postingQueries = `
  postingsFind(_id: String, name: String): [Posting]
  postingFindById(_id: String, name: String): Posting
  postingFindOne(_id: String, name: String): Posting
`;
