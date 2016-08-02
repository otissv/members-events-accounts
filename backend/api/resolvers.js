import address, { Address } from './address/address-resolvers';
import authentiaction from './authentiaction/authentiaction-resolvers';
import cashSale, { CashSale } from './cash-sale/cash-sale-resolvers';
import clientCreditNote, { ClientCreditNote } from './client-credit-note/client-credit-note-resolvers';
import clientInvoice, { ClientInvoice } from './client-invoice/client-invoice-resolvers';
import clientOrder, { ClientOrder } from './client-order/client-order-resolvers';
import eventCategory, { EventCategory } from './event-category/event-category-resolvers';
import ledgerAccount, { LedgerAccount } from './ledger-account/ledger-account-resolvers';
import note, { Note} from './note/note-resolvers';
import posting, { Posting } from './posting/posting-resolvers';
import supplierCreditNote, { SupplierCreditNote } from './supplier-credit-note/supplier-credit-note-resolvers';
import supplierInvoice, { SupplierInvoice } from './supplier-invoice/supplier-invoice-resolvers';
import supplierOrder, { SupplierOrder } from './supplier-order/supplier-order-resolvers';
import user, { User } from './user/user-resolvers';


export default {
  Query: {
    ...address,
    ...authentiaction,
    ...cashSale,
    ...clientCreditNote,
    ...clientInvoice,
    ...clientOrder,
    ...eventCategory,
    ...note,
    ...posting,
    ...supplierCreditNote,
    ...supplierInvoice,
    ...supplierOrder,
    ...user
  },

  Address,
  CashSale,
  ClientCreditNote,
  ClientInvoice,
  ClientOrder,
  EventCategory,
  Note,
  Posting,
  SupplierCreditNote,
  SupplierInvoice,
  SupplierOrder,
  User
};
