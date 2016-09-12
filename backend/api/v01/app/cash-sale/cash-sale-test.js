import test from 'tape';
import env from '../../../../env/development-env';
import fetch from '../../../../helpers/fetch-test-helper';
import { cashSalesMock } from './cash-sale-mocks';

import axios from 'axios';

test('cashSale controller', nested => {
  nested.test ('cashSalesFind: ', assert => {
    const query = {
      query:`
      {
        cashSalesFind {
          _id
          amount
          created
          discount
          quanity
          updated
          posting {
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
        const actaul =response.data.cashSalesFind;
        const expect = cashSalesMock;

        assert.deepEquals(actaul, expect,
          'Find all cashSales');
      }
    });

    assert.end();
  });


  nested.test ('cashSaleFindOne: ', assert => {
    const query = {
      query:`
      {
        cashSaleFindOne {
          _id
          amount
          created
          discount
          quanity
          updated
          posting {
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
        const actaul =response.data.cashSaleFindOne;
        const expect = cashSalesMock[0];

        assert.deepEquals(actaul, expect,
          'Find one cashSale only');
      }
    });

    assert.end();
  });


  nested.test ('cashSaleFindById: ', assert => {
    const query = {
      query:`
      {
        cashSaleFindById (_id: "57c46686511c610a2c266b89") {
          _id
          amount
          created
          discount
          quanity
          updated
          posting {
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
        const actaul = response.data.cashSaleFindById;
        const expect = cashSalesMock[0];

        assert.deepEquals(actaul, expect,
          'Find an cashSale by id');
      }
    });

    assert.end();
  });
});
