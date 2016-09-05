import test from 'tape';
import env from '../../env/development-env';
import fetch from '../../helpers/fetch-test-helper';
import { postingsMock } from './posting-mocks';

import axios from 'axios';

test.skip('posting controller', nested => {
  nested.test ('postingsFind: ', assert=> {
    const query = {
      query:`
      {
        postingsFind {
          _id
          category
          created
          credit
          currency
          debit
          description
          discount
          reference
          transactionType
          updated
          ledgerAccount {
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
        const actaul =response.data.postingsFind;
        const expect = postingsMock;

        assert.deepEquals(actaul, expect,
          'Find all postings');
      }
    });

    assert.end();
  });


  nested.test ('postingFindOne: ', assert=> {
    const query = {
      query:`
      {
        postingFindOne {
          _id
          category
          created
          credit
          currency
          debit
          description
          discount
          reference
          transactionType
          updated
          ledgerAccount {
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
        const actaul =response.data.postingFindOne;
        const expect = postingsMock[0];

        assert.deepEquals(actaul, expect,
          'Find one posting only');
      }
    });

    assert.end();
  });


  nested.test ('postingFindById: ', assert=> {
    const query = {
      query:`
      {
        postingFindById (_id: "57c46686511c610a2c266b8a") {
          _id
          category
          created
          credit
          currency
          debit
          description
          discount
          reference
          transactionType
          updated
          ledgerAccount {
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
        const actaul = response.data.postingFindById;
        const expect = postingsMock[0];

        assert.deepEquals(actaul, expect,
          'Find an posting by id');
      }
    });

    assert.end();
  });
});
