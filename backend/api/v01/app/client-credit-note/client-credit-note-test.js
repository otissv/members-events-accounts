import test from 'tape';
import env from '../../env/development-env';
import fetch from '../../../helpers/fetch-test-helper';
import { clientCreditNotesMock } from './client-credit-note-mocks';

import axios from 'axios';

test.skip('cashSale controller', nested => {
  nested.test ('clientCreditNotesFind: ', assert => {
    const query = {
      query:`
      {
        clientCreditNotesFind {
          _id
          created
          shippingMethod
          status
          updated
          posting {
            _id
          }
          client {
            _id
          }
          notes {
            _id
          }
          createdBy {
            _id
          }
          updatedBy {
            _id
          }
        }
      }`
    };

    fetch({
      method: 'post',
      url   : `http://localhost:5002/graphql`,
      data: query,
      assert: (response) => {
        const actaul =response.data.clientCreditNotesFind;
        const expect = cashSalesMock;

        assert.deepEquals(actaul, expect,
          'Find all cashSales');
      }
    });

    assert.end();
  });


  nested.test ('clientCreditNoteFindOne: ', assert => {
    const query = {
      query:`
      {
        clientCreditNoteFindOne {
          _id
          created
          shippingMethod
          status
          updated
          posting {
            _id
          }
          client {
            _id
          }
          notes {
            _id
          }
          createdBy {
            _id
          }
          updatedBy {
            _id
          }
        }
      }`
    };

    fetch({
      method: 'post',
      url   : `http://localhost:5002/graphql`,
      data: query,
      assert: (response) => {
        const actaul =response.data.clientCreditNoteFindOne;
        const expect = cashSalesMock[0];

        assert.deepEquals(actaul, expect,
          'Find one cashSale only');
      }
    });

    assert.end();
  });


  nested.test ('clientCreditNoteFindById: ', assert => {
    const query = {
      query:`
      {
        clientCreditNoteFindById (_id: "57c46686511c610a2c266b89") {
          _id
          created
          shippingMethod
          status
          updated
          posting {
            _id
          }
          client {
            _id
          }
          notes {
            _id
          }
          createdBy {
            _id
          }
          updatedBy {
            _id
          }
        }
      }`
    };

    fetch({
      method: 'post',
      url   : `http://localhost:5002/graphql`,
      data: query,
      assert: (response) => {
        const actaul = response.data.clientCreditNoteFindById;
        const expect = cashSalesMock[0];

        assert.deepEquals(actaul, expect,
          'Find an client credit note find by id by id');
      }
    });

    assert.end();
  });
});
