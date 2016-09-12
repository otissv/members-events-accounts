import test from 'tape';
import env from '../../../../env/development-env';
import fetch from '../../../../helpers/fetch-test-helper';
import { ledgerAccountsMock } from './ledger-account-mocks';

import axios from 'axios';

test('ledgerAccount controller', nested => {
  nested.test ('ledgerAccountsFind: ', assert=> {
    const query = {
      query:`
      {
        ledgerAccountsFind {
          _id
          created
          flag
          ledgerAccount
          updated
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
        const actaul =response.data.ledgerAccountsFind;
        const expect = ledgerAccountsMock;

        assert.deepEquals(actaul, expect,
          'Find all ledgerAccounts');
      }
    });

    assert.end();
  });


  nested.test ('ledgerAccountFindOne: ', assert=> {
    const query = {
      query:`
      {
        ledgerAccountFindOne {
          _id
          created
          flag
          ledgerAccount
          updated
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
        const actaul =response.data.ledgerAccountFindOne;
        const expect = ledgerAccountsMock[0];

        assert.deepEquals(actaul, expect,
          'Find one ledgerAccount only');
      }
    });

    assert.end();
  });


  nested.test ('ledgerAccountFindById: ', assert=> {
    const query = {
      query:`
      {
        ledgerAccountFindById (_id: "563fa9dd007093486f3052n1") {
          _id
          created
          flag
          ledgerAccount
          updated
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
        const actaul = response.data.ledgerAccountFindById;
        const expect = ledgerAccountsMock[0];

        assert.deepEquals(actaul, expect,
          'Find an ledgerAccount by id');
      }
    });

    assert.end();
  });
});
