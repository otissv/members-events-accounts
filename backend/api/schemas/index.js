import ledgerAccount from './ledger-account-schemas';
import posting from './posting-schemas';


const typeDefinitions = `
type Query {
  postingFindOne(_id: String, name: String): Posting
  postingsFind(_id: String, name: String): [Posting]
  ledgerAccountFindOne(_id: String, name: String, ): LegdgerAccount
  ledgerAccountsFind(_id: String, name: String): [LegdgerAccount]
}

schema {
  query: Query
}
`;

export default [
  ledgerAccount,
  posting,
  typeDefinitions
];
