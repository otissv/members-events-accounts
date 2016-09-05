
import { addressQueries, Address } from './address/address-resolvers';
import { authentiactionQueries, authentiactionMutations, Authentiaction } from './authentiaction/authentiaction-resolvers';
import { cashSaleQueries, CashSale } from './cash-sale/cash-sale-resolvers';
import { clientCreditNoteQueries, ClientCreditNote } from './client-credit-note/client-credit-note-resolvers';
import { clientInvoiceQueries, ClientInvoice } from './client-invoice/client-invoice-resolvers';
import { clientOrderQueries, ClientOrder } from './client-order/client-order-resolvers';
import { eventQueries, Event } from './event/event-resolvers';
import { eventCategoryQueries, EventCategory } from './event-category/event-category-resolvers';
import { ledgerAccountQueries, LedgerAccount } from './ledger-account/ledger-account-resolvers';
import { noteQueries, Note } from './note/note-resolvers';
import { postingQueries, Posting } from './posting/posting-resolvers';
import { supplierCreditNoteQueries, SupplierCreditNote } from './supplier-credit-note/supplier-credit-note-resolvers';
import { supplierInvoiceQueries, SupplierInvoice } from './supplier-invoice/supplier-invoice-resolvers';
import { supplierOrderQueries, SupplierOrder } from './supplier-order/supplier-order-resolvers';
import { userQueries, userMutations, User } from './user/user-resolvers';


export default {
  Query: {
    ...addressQueries,
    ...authentiactionQueries,
    ...cashSaleQueries,
    ...clientCreditNoteQueries,
    ...clientInvoiceQueries,
    ...clientOrderQueries,
    ...eventQueries,
    ...eventCategoryQueries,
    ...ledgerAccountQueries,
    ...noteQueries,
    ...postingQueries,
    ...supplierCreditNoteQueries,
    ...supplierInvoiceQueries,
    ...supplierOrderQueries,
    ...userQueries
  },

  Mutation: {
    ...userMutations,
    ...authentiactionMutations
  },

  Address,
  CashSale,
  ClientCreditNote,
  ClientInvoice,
  ClientOrder,
  Event,
  EventCategory,
  LedgerAccount,
  Note,
  Posting,
  SupplierCreditNote,
  SupplierInvoice,
  SupplierOrder,
  User
};
