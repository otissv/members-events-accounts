import ledgerAccount from './ledger-account-resolvers';
import posting from './posting-resolvers';


export default {
  Query: {
    ...ledgerAccount,
    ...posting
  }
};
