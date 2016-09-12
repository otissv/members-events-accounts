import address, { addressQueries } from './address/address-schemas';
import cashSale, { cashSaleQueries } from './cash-sale/cash-sale-schemas';
import clientCreditNote, { clientCreditNoteQueries } from './client-credit-note/client-credit-note-schemas';
import clientInvoice, { clientInvoiceQueries } from './client-invoice/client-invoice-schemas';
import clientOrder, { clientOrderQueries } from './client-order/client-order-schemas';
import event, { eventQueries } from './event/event-schemas';
import eventCategory, { eventCategoryQueries } from './event-category/event-category-schemas';
import ledgerAccount, { ledgerAccountQueries } from './ledger-account/ledger-account-schemas';
import note, { noteQueries } from './note/note-schemas';
import posting, { postingQueries } from './posting/posting-schemas';
import supplierCreditNote, { supplierCreditNoteQueries } from './supplier-credit-note/supplier-credit-note-schemas';
import supplierInvoice, { supplierInvoiceQueries } from './supplier-invoice/supplier-invoice-schemas';
import supplierOrder, { supplierOrderQueries } from './supplier-order/supplier-order-schemas';
import user, { userQueries, userMutaions } from './user/user-schemas';


const typeDefinitions = `
type Query {
  ${addressQueries}
  ${cashSaleQueries}
  ${clientCreditNoteQueries}
  ${clientInvoiceQueries}
  ${clientOrderQueries}
  ${eventQueries}
  ${eventCategoryQueries}
  ${ledgerAccountQueries}
  ${noteQueries}
  ${postingQueries}
  ${supplierCreditNoteQueries}
  ${supplierInvoiceQueries}
  ${supplierOrderQueries}
  ${userQueries}
}

type Mutation {
  ${userMutaions}
}

schema {
  query: Query
  mutation: Mutation
}
`;

export default [
  typeDefinitions,
  address,
  cashSale,
  clientCreditNote,
  clientInvoice,
  clientOrder,
  event,
  eventCategory,
  ledgerAccount,
  note,
  posting,
  supplierCreditNote,
  supplierInvoice,
  supplierOrder,
  user
];
