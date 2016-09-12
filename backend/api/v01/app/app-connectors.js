import mocks from './app-mocks';

import Address from './address/address-connectors';
import CashSale from './cash-sale/cash-sale-connectors';
import ClientCreditNote from './client-credit-note/client-credit-note-connectors';
import ClientInvoice from './client-invoice/client-invoice-connectors';
import ClientOrder from './client-order/client-order-connectors';
import Event from './event/event-connectors';
import EventCategory from './event-category/event-category-connectors';
import LedgerAccount from './ledger-account/ledger-account-connectors';
import Note from './note/note-connectors';
import Posting from './posting/posting-connectors';
import SupplierCreditNote from './supplier-credit-note/supplier-credit-note-connectors';
import SupplierInvoice from './supplier-invoice/supplier-invoice-connectors';
import SupplierOrder from './supplier-order/supplier-order-connectors';
import User from './user/user-connectors';


const {
  addressMock,
  cashSaleMock,
  clientCreditNoteMock,
  clientInvoiceMock,
  clientOrderMock,
  eventMock,
  eventCategoryMock,
  ledgerAccountMock,
  noteMock,
  postingMock,
  supplierCreditNoteMock,
  supplierInvoiceMock,
  supplierOrderMock,
  userMock
} = mocks;


function connectors (mock) {
  return {
    address           : mock ? addressMock           : Address,
    cashSale          : mock ? cashSaleMock          : CashSale,
    clientCreditNote  : mock ? clientCreditNoteMock  : ClientCreditNote,
    clientInvoice     : mock ? clientInvoiceMock     : ClientInvoice,
    clientOrder       : mock ? clientOrderMock       : ClientOrder,
    event             : mock ? eventMock             : Event,
    eventCategory     : mock ? eventCategoryMock     : EventCategory,
    ledgerAccount     : mock ? ledgerAccountMock     : LedgerAccount,
    note              : mock ? noteMock              : Note,
    posting           : mock ? postingMock           : Posting,
    supplierCreditNote: mock ? supplierCreditNoteMock: SupplierCreditNote,
    supplierInvoice   : mock ? supplierInvoiceMock   : SupplierInvoice,
    supplierOrder     : mock ? supplierOrderMock     : SupplierOrder,
    user              : mock ? userMock              : User
  };
};


export default connectors;
