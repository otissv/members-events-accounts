import cashSale from './cash-sale-resolvers';
import clientCreditNote from './client-credit-note-resolvers';
import clientInvoice from './client-invoice-resolvers';
import clientOrder from './client-order-resolvers';
import ledgerAccount from './ledger-account-resolvers';
import posting from './posting-resolvers';
import supplierCreditNote from './supplier-credit-note-resolvers';
import supplierInvoice from './supplier-invoice-resolvers';
import supplierOrder from './supplier-order-resolvers';


export default {
  Query: {
  	...cashSale,
  	...clientCreditNote,
  	...clientInvoice,
  	...clientOrder,
    ...ledgerAccount,
    ...posting,
    ...supplierCreditNote,
  	...supplierInvoice,
  	...supplierOrder
  }
};
