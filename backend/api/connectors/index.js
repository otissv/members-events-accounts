import mocks from '../mocks';

import CashSale from './cash-sale-connectors'
import ClientCreditNote from './client-credit-note-connectors';
import ClientInvoice from './client-invoice-connectors';
import ClientOrder from './client-order-connectors';
import LedgerAccount from './ledger-account-connectors';
import Posting from './posting-connectors';


const mock = true;
const { 
	cashSaleMock,
	clientCreditNoteMock,
	clientInvoiceMock,
	clientOrderMock,
	ledgerAccountMock,
	postingMock,
	supplierCreditNoteMock,
	supplierInvoiceMock,
	supplierOrderMock
} = mocks;


const connectors = {
	cashSale          : mock ? cashSaleMock          : CashSale,
	clientCreditNote  : mock ? clientCreditNoteMock  : ClientCreditNote,
	clientInvoice     : mock ? clientInvoiceMock     : ClientInvoice,
	clientOrder       : mock ? clientOrderMock       : ClientOrder,
  ledgerAccount     : mock ? ledgerAccountMock     : LedgerAccount,
  posting           : mock ? postingMock           : Posting,
  SupplierCreditNote: mock ? supplierCreditNoteMock: SupplierCreditNote,
	SupplierInvoice   : mock ? supplierInvoiceMock   : SupplierInvoice,
	SupplierOrder     : mock ? supplierOrderMock     : SupplierOrder
};




export default connectors;
