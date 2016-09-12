
export default `
type LedgerAccount {
  _id        : String,
  created    : String,
  createdBy  : User,
  description: String,
  name       : String,
  notes      : [Note],
  status     : String,
  updated    : String,
  updatedBy  : User
}
`;


export const ledgerAccountQueries = `
  ledgerAccountsFind(_id: String, name: String): [LedgerAccount]
  ledgerAccountFindById(_id: String, name: String): LedgerAccount
  ledgerAccountFindOne(_id: String, name: String): LedgerAccount
`;
