import LedgerAccount from './ledger-account-connectors';
import Postings from './posting-connectors.js';

const connectors = {
  ledgerAccount: LedgerAccount,
  posting       : Postings
};

export default connectors;
