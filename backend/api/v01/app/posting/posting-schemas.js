
export default `
type Posting {
  _id 		       : String,
  category       : String
  created        : String,
  createdBy      : User,
  credit 		     : Int,
  currency  		 : String,
  debit 		     : Int,
  description		 : String,
  discount       : Int,
  ledgerAccount  : LedgerAccount,
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
