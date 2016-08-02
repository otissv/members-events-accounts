
export default `
type LegdgerAccount {
  _id        : String,
  created    : String,
  createdBy  : User,
  description: String,
  name       : String,
  notes      : [Note],
  notesIds   : String,
  status     : String,
  updated    : String,
  updatedBy  : User
}
`;


export const ledgerAccountQueries = `
  ledgerAccountsFind(_id: String, name: String): [LegdgerAccount]
  ledgerAccountFindById(_id: String, name: String): LegdgerAccount
  ledgerAccountFindOne(_id: String, name: String): LegdgerAccount
`;
