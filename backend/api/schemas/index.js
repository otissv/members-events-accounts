import legdgerAccount from './legdger-account-schemas';
import posting from './posting-schemas';


const typeDefinitions = `
type Query {
  postingFindOne(_id: String, name: String): String
  postingsFind(_id: String, name: String): [String]
  legdgerAccountFindOne(_id: String, name: String, ): String
  legdgerAccountsFind(_id: String, name: String): [String]
}

schema {
  query: Query
}
`;

export default [
  legdgerAccount,
  posting,
  typeDefinitions
];
