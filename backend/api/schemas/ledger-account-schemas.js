
export default `
type LegdgerAccount {
  _id        : String,
  description: String,
  name       : String,
  notesIds   : String, 
  status     : String
}
`;


export const ledgerAccountQueries = `
	ledgerAccountsFind(_id: String, name: String): [LegdgerAccount] 
  ledgerAccountFindOne(_id: String, name: String): LegdgerAccount
`;