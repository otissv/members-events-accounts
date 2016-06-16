import cashSale, {cashSaleQueries } from './cash-sale-schemas.js';
import clientCreditNote, { clientCreditNoteQueries } from './client-credit-note-schemas';
import clientInvoice, { clientInvoiceQueries } from './client-invoice-schemas';
import clientOrder, { clientOrderQueries } from './client-order-schemas';
import ledgerAccount, { ledgerAccountQueries } from './ledger-account-schemas';
import posting, { postingQueries } from './posting-schemas';
import supplierCreditNote, { supplierCreditNoteQueries } from './supplier-credit-note-schemas';
import supplierInvoice, { supplierInvoiceQueries } from './supplier-invoice-schemas';
import supplierOrder, { supplierOrderQueries } from './supplier-order-schemas';


const typeDefinitions = `
type Query {
	${cashSaleQueries}
	${clientCreditNoteQueries}
  ${clientInvoiceQueries}
  ${clientOrderQueries}
  ${ledgerAccountQueries}
  ${postingQueries}
  ${supplierCreditNoteQueries}
	${supplierInvoiceQueries}
	${supplierOrderQueries}
}

schema {
  query: Query
}
`;

export default [
	cashSale,
	clientCreditNote,
	clientInvoice,
	clientOrder,
  ledgerAccount,
  posting,
  supplierCreditNote,
  supplierInvoice,
  supplierOrder,
  typeDefinitions
];