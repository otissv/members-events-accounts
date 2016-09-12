import test from 'tape';
import env from '../../../env/development-env';
import fetch from '../../../helpers/fetch-test-helper';
import { addressesMock } from './address-mocks';

import axios from 'axios';

test('Address controller', nested => {
  nested.test ('addressesFind: ', assert=> {
    const query = {
      query:`
      {
        addressesFind {
          _id
          address1
          address2
          city
          country
          created
          current
          postCode
          rooms
          state
          status
          updated
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
        const actaul =response.data.addressesFind;
        const expect = addressesMock;

        assert.deepEquals(actaul, expect,
          'Find all address');
      }
    });

    assert.end();
  });


  nested.test ('addressFindOne: ', assert=> {
    const query = {
      query:`
      {
        addressFindOne {
          _id
          address1
          address2
          city
          country
          created
          current
          postCode
          rooms
          state
          status
          updated
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
        const actaul =response.data.addressFindOne;
        const expect = addressesMock[0];

        assert.deepEquals(actaul, expect,
          'Find one address only');
      }
    });

    assert.end();
  });

  nested.test ('addressFindById: ', assert=> {
    const query = {
      query:`
      {
        addressFindById (_id: "57509b5f350a10fb44e4c2b5") {
          _id
          address1
          address2
          city
          country
          created
          current
          postCode
          rooms
          state
          status
          updated
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
        const actaul =response.data.addressFindById;
        const expect = addressesMock[0];

        assert.deepEquals(actaul, expect,
          'Find an address by id');
      }
    });

    assert.end();
  });



});
