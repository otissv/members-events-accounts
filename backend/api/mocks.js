import AddressMock from './address/address-mocks';
import AuthentiactionMock from './authentiaction/authentiaction-mocks';
import CashSaleMock from './cash-sale/cash-sale-mocks';
import ClientCreditNoteMock from './client-credit-note//client-credit-note-mocks';
import ClientInvoiceMock from './client-invoice/client-invoice-mocks';
import ClientOrderMock from './client-order/client-order-mocks';
import EventCategoryMock from './event-category/event-category-mocks';
import EventMock from './event/event-mocks';
import LedgerAccountMock from './ledger-account/ledger-account-mocks';
import NoteMock from './note/note-mocks';
import PostingMock from './posting/posting-mocks';
import SupplierCreditNoteMock from './supplier-credit-note/supplier-credit-note-mocks';
import SupplierInvoiceMock from './supplier-invoice/supplier-invoice-mocks';
import SupplierOrderMock from './supplier-order/supplier-order-mocks';
import UserMock from './user/user-mocks';


const mocks = {
  addressMock           : AddressMock,
  authentiactionMock    : AuthentiactionMock,
  cashSaleMock          : CashSaleMock,
  clientCreditNoteMock  : ClientCreditNoteMock,
  clientInvoiceMock     : ClientInvoiceMock,
  clientOrderMock       : ClientOrderMock,
  eventMock             : EventMock,
  eventCategoryMock     : EventCategoryMock,
  ledgerAccountMock     : LedgerAccountMock,
  noteMock              : NoteMock,
  postingMock           : PostingMock,
  supplierCreditNoteMock: SupplierCreditNoteMock,
  supplierInvoiceMock   : SupplierInvoiceMock,
  supplierOrderMock     : SupplierOrderMock,
  userMock              : UserMock
};


export default mocks;
