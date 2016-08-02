import mocks from './mocks';

import Address from './address/address-connectors';
import Authentiaction from './authentiaction/authentiaction-connectors';
import CashSale from './cash-sale/cash-sale-connectors';
import ClientCreditNote from './client-credit-note/client-credit-note-connectors';
import ClientInvoice from './client-invoice/client-invoice-connectors';
import ClientOrder from './client-order/client-order-connectors';
import EventCategory from './event-category/event-category-connectors';
import LedgerAccount from './ledger-account/ledger-account-connectors';
import Note from './note/note-connectors';
import Posting from './posting/posting-connectors';
import SupplierCreditNote from './supplier-credit-note/supplier-credit-note-connectors';
import SupplierInvoice from './supplier-invoice/supplier-invoice-connectors';
import SupplierOrder from './supplier-order/supplier-order-connectors';
import User from './user/user-connectors';


const mock = false;

const {
  addressMock,
  authentiactionMock,
  cashSaleMock,
  clientCreditNoteMock,
  clientInvoiceMock,
  clientOrderMock,
  eventCategoryMock,
  noteMock,
  postingMock,
  supplierCreditNoteMock,
  supplierInvoiceMock,
  supplierOrderMock,
  userMock
} = mocks;


const connectors = {
  address           : mock ? addressMock           : Address,
  authentiaction    : mock ? authentiactionMock    : Authentiaction,
  cashSale          : mock ? cashSaleMock          : CashSale,
  clientCreditNote  : mock ? clientCreditNoteMock  : ClientCreditNote,
  clientInvoice     : mock ? clientInvoiceMock     : ClientInvoice,
  clientOrder       : mock ? clientOrderMock       : ClientOrder,
  eventCategory     : mock ? eventCategoryMock     : EventCategory,
  note              : mock ? noteMock              : Note,
  posting           : mock ? postingMock           : Posting,
  SupplierCreditNote: mock ? supplierCreditNoteMock: SupplierCreditNote,
  SupplierInvoice   : mock ? supplierInvoiceMock   : SupplierInvoice,
  SupplierOrder     : mock ? supplierOrderMock     : SupplierOrder,
  user              : mock ? userMock              : User
};


export default connectors;
